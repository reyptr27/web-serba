import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Video from "@/app/ui/components/video";
import CustomImage from "@/app/ui/components/custom-image";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  const blogPost = await fetch(`https://raw.githubusercontent.com/reyptr27/web-serba-contents/master/${fileName}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!blogPost.ok) return undefined;

  const rawMDX = await blogPost.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{ title: string; date: string; tags: string[] }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content };

  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const postMeta = await fetch("https://api.github.com/repos/reyptr27/web-serba-contents/git/trees/master?recursive=1", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!postMeta.ok) return undefined;

  const repoFiletree: Filetree = await postMeta.json();

  const filesArray = repoFiletree.tree.map((obj) => obj.path).filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

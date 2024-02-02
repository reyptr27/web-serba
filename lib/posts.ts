// lib/posts.ts
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import Video from "@/app/ui/components/video";
import CustomImage from "@/app/ui/components/custom-image";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByPath( postType:string, fileName: string ): Promise<Post | undefined> {
  
  const postUrl = postType === "tutorial" ? "tutorial" : "blog";
  const res = await fetch(`https://raw.githubusercontent.com/reyptr27/${postUrl}-posts/master/${fileName}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{ title: string; date: string; tags: string[]; image?: string }>({
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

  const postObj: Post = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, image: frontmatter.image }, content };

  return postObj;
}

export async function getPostsMeta(postType: string): Promise<Meta[] | undefined> {
 
  const postUrl = postType === "tutorial" ? "tutorial" : "blog";
  const res = await fetch(`https://api.github.com/repos/reyptr27/${postUrl}-posts/git/trees/master?recursive=1`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree.map((obj) => obj.path).filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByPath(postType, file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

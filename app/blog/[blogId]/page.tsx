import getFormattedDate from "@/lib/get-formatted-date";
import { getPostsMeta, getPostByPath } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Each } from "@/app/each";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    blogId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta("blog"); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    blogId: post.id,
  }));
}

export async function generateMetadata({ params: { blogId } }: Props) {
  const post = await getPostByPath("blog", `${blogId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { blogId } }: Props) {
  const post = await getPostByPath("blog", `${blogId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta?.date);

  const blogTags = (
    <Each
      of={meta.tags}
      render={(blogTag, index) => (
        <Link key={index} href={`/blog-tags/${blogTag}`}>
          {blogTag}
        </Link>
      )}
    />
  );

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{blogTags}</div>
      </section>
      <p className="mb-10">
        <Link href="/blog">← Back to Blog</Link>
      </p>
    </>
  );
}
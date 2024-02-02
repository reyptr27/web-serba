import getFormattedDate from "@/lib/get-formatted-date";
import { getPostsMeta, getPostByPath } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Each } from "@/app/each";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    tutorialId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta("tutorial"); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    tutorialId: post.id,
  }));
}

export async function generateMetadata({ params: { tutorialId } }: Props) {
  const post = await getPostByPath("tutorial", `${tutorialId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { tutorialId } }: Props) {
  const post = await getPostByPath("tutorial", `${tutorialId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta?.date);

  const tutorialTags = (
    <Each
      of={meta.tags}
      render={(tutorialTag, i) => (
        <Link key={i} href={`/tutorial-tags/${tutorialTag}`}>
          {tutorialTag}
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
        <div className="flex flex-row gap-4">{tutorialTags}</div>
      </section>
      <p className="mb-10">
        <Link href="/tutorial">← Back to Tutorial</Link>
      </p>
    </>
  );
}
// components/posts.tsx
import { getPostsMeta } from "@/lib/posts";
import ListPosts from "@/app/ui/components/list-posts";

type Props = {
  postType: string; 
};

export default async function Posts({ postType }: Props) {
  const posts = await getPostsMeta(postType);

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">{postType === "tutorial" ? "Tutorials" : "Blogs"}</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListPosts key={post.id} post={post} postType={postType} />
        ))}
      </ul>
    </section>
  );
}

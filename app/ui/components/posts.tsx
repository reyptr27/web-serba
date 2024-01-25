import { getPostsMeta } from "@/lib/posts";
import { Each } from "@/app/each";
import ListItem from "@/app/ui/components/list-posts";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center pl-0 pt-10 md:pl-3 text-gray-700 dark:text-gray-50">Sorry, no posts available.</p>;
  }

  return (
    <>
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <ul className="w-full list-none p-0">
          <Each of={posts} render={(post) => <ListItem key={post.id} post={post} />} />
        </ul>
      </section>
    </>
  );
}

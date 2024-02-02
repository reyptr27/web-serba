import { getPostsMeta } from "@/lib/posts";
import ListPosts from "@/app/ui/components/list-posts";
import { Each } from "@/app/each";

type Props = {
  postType: string; 
};

export default async function Posts({ postType }: Props) {
  const posts = await getPostsMeta(postType);

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <section className="mt-6 mx-auto w-full">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start ">
          <Each
            of={posts}
            render={(post) => (
              <div key={post.id} className="px-1 md:px-0">
                <ListPosts post={post} postType={postType} />
              </div>
            )}
          />
        </div>
      </section>
    </>
  );
}

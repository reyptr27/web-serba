import MyProfile from "@/app/ui/components/my-profile";
import Posts from "@/app/ui/components/posts";

export const revalidate = 86400;

export default function Home() {
  return (
    <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <div className="mx-auto">
        <MyProfile />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Reynaldo</span>.
          </span>
        </p>
        {/* @ts-expect-error Server Component */}
        <Posts />
      </div>
    </main>
  );
}

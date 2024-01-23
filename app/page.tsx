import MyProfile from "@/app/ui/components/my-profile";
import Posts from "@/app/ui/components/posts";

export const revalidate = 86400;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="mx-auto">
        <MyProfile />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Reynaldo</span>.
          </span>
        </p>
        <Posts />
      </div>
    </main>
  );
}

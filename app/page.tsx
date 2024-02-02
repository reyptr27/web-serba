import MyProfile from "@/app/ui/components/my-profile";

export const revalidate = 86400;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="mx-auto">
        <MyProfile />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            To <span className="font-bold">Web Serba</span>.
          </span>
        </p>
      </div>
    </main>
  );
}

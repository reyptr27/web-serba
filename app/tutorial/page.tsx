import Posts from "@/app/ui/components/posts";
import { Suspense } from "react";
import Loading from "@/app/ui/components/loading";

export const revalidate = 86400;

export default function Tutorial() {

  return (
    <div className="h-screen">
      <Suspense fallback={<Loading />}>
        <div className="px-7 md:pb-20">
          <Posts postType="tutorial" />
        </div>
      </Suspense>
    </div>
  );
}

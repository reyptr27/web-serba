import Link from "next/link";
import getFormattedDate from "@/lib/get-formatted-date";

type Props = {
  post: Meta;
  postType: string;
};

export default function ListPosts({ post, postType }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <>
      <div className="w-full md:w-60 p-4 bg-gray-50 dark:bg-[#091a28] border border-[#e2ecec] dark:border-[#0d2538] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img className="h-40 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
        <div className="p-2">
          <h2 className="font-bold text-gray-700 dark:text-gray-50 text-md pt-1">{title.length > 20 ? `${title.substring(0, 20)} ...` : title}</h2>
          <p className="text-xs text-gray-700 dark:text-gray-50/60 mb-2">{formattedDate}</p>
          <p className="text-sm text-gray-700 dark:text-gray-50">Simple Yet Beautiful ...</p>
        </div>
        <div className="m-2 pt-4">
          <Link href={`/${postType}/${id}`} className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

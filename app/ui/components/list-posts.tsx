import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/lib/get-formatted-date";
import { BiRightArrowAlt } from "react-icons/bi";

type Props = {
  post: Meta;
  postType: string;
};

export default function ListPosts({ post, postType }: Props) {
  const { id, title, date, image } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <>
      <div className="w-72 md:w-60 p-4 bg-gray-50 dark:bg-[#091a28] border border-[#e2ecec] dark:border-[#0d2538] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <Image className="h-40 w-full object-fit rounded-xl" src={image || "/no-image.svg"} width={0} height={0} alt={title} priority={true} unoptimized />
        <div className="p-2">
          <h2 className="font-bold text-gray-700 dark:text-gray-50 text-md pt-1">{title.length > 20 ? `${title.substring(0, 20)} ...` : title}</h2>
          <p className="text-xs text-gray-700 dark:text-gray-50/60 mb-2">{formattedDate}</p>
          <p className="text-sm text-gray-700 dark:text-gray-50">Simple Yet Beautiful ...</p>
        </div>
        <div className="m-2 pt-4 flex items-center">
          <Link href={`/${postType}/${id}`} className="text-gray-50 bg-green-700 px-3 py-1 rounded-md hover:opacity-80 flex items-center">
            <span className="mr-2">Read More</span>
            <BiRightArrowAlt className="text-gray-50 text-xl font-bold" />
          </Link>
        </div>
      </div>
    </>
  );
}

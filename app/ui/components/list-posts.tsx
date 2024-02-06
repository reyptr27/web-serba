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

  console.log(image)

  return (
    <>
      <div className="w-full p-4 bg-gray-50 dark:bg-[#091a28] border border-[#e2ecec] dark:border-[#0d2538] rounded-xl lg:transform transition-all lg:hover:-translate-y-2 duration-300 shadow-lg lg:hover:shadow-2xl">
        <Link href={`/${postType}/${id}`}>
          <Image className="h-40 w-72 md:w-48 lg:w-52 object-fit rounded-xl" src={image} width={0} height={0} alt={title} priority={true} unoptimized />
        </Link>
        <div className="p-2">
          <Link href={`/${postType}/${id}`}>
            <h2 className="font-bold text-gray-700 dark:text-gray-50 hover:opacity-80 text-md pt-1">{title.length > 20 ? `${title.substring(0, 20)} ...` : title}</h2>
          </Link>
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

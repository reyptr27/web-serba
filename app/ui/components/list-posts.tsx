import Link from "next/link";
import GetFormattedDate from "@/lib/get-formatted-date";

type Props = {
  post: Meta;
};

export default function ListPosts({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = GetFormattedDate(date);

  return (
    <>
      <li className="mt-4 text-2xl dark:text-white/90">
        <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>
          {title}
        </Link>
        <br />
        <p className="text-sm mt-1">{formattedDate}</p>
      </li>
    </>
  );
}

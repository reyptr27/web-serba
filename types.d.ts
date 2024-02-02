type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image?: string;
};

type Post = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}
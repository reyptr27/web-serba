import { Children, ReactNode } from "react";

interface EachProps<Content> {
  render: (item: Content, index: number) => ReactNode;
  of: Content[];
}

export const Each = <Content,>({ render, of }: EachProps<Content>) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};

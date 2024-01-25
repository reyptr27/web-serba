import { Children, ReactNode } from "react";

interface EachProps<Item> {
  render: (item: Item, index: number) => ReactNode;
  of: Item[];
}

export const Each = <Item,>({ render, of }: EachProps<Item>) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};

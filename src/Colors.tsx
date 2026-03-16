import { Color } from "./Color";

type ColorItem = {
  id: number;
  name: string;
};

type ColorsProp = {
  items: ColorItem[];
};

export function Colors({ items }: ColorsProp) {
  return (
    <ul>
      {items.map((item) => (
        <Color key={item.id} name={item.name} />
      ))}
    </ul>
  );
}

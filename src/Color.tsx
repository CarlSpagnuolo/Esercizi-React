type ColorProp = {
  name: string;
};

export function Color({ name }: ColorProp) {
  return <li>{name}</li>;
}

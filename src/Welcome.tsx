import { Age } from "./Age";
type WelcomeProps = {
  name?: React.ReactNode;
  age: number;
};

export function Welcome({ name = "You", age }: WelcomeProps) {
  return (
    <div>
      <p>Welcome {name}!</p>
      <Age age={age} />
    </div>
  );
}

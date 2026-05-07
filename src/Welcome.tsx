// import { Age } from "./Age";
// type WelcomeProps = {
//   name?: React.ReactNode;
//   age: number;
// };

// export function Welcome({ name = "You", age }: WelcomeProps) {
//   return (
//     <div>
//       <p>Welcome {name}!</p>
//       <Age age={age} />
//     </div>
//   );
// }

// import { Age } from "./Age";
// import { Message } from "./Message";
// type WelcomeProps = {
//   name: string;
//   age: number;
// };
// export function Welcome({ name, age }: WelcomeProps) {
//   return (
//     <div>
//       <p>Welcome {name}!</p>
//       {age > 18 && <Age age={age} />}
//       {age && <Age age={age} />}
//       {age > 18 && age < 65 && <Age age={age} />}
//       {age > 18 && name === "John" && <Age age={age} />}
//       {age !== undefined && <Age age={age} />}
//       <Message age={age} />
//     </div>
//   );
// }
type WelcomeProps = {
  name: string;
  age?: number;
};
export function Welcome({ name, age }: WelcomeProps) {
  return (
    <p>
      Welcome {name}!{age !== undefined && ` You are ${age} years old!`}
    </p>
  );
}

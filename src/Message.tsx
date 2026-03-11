// export function Message() {
//   return <p>What a beautiful day!</p>;
// }

type AgeProps = {
  age: number;
};
export function Message({ age }: AgeProps) {
  if (age > 18) {
    return <p>You are older than 18!</p>;
  } else {
    return <p>You are very young!</p>;
  }
}

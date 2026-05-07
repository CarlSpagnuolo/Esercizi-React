import { sum } from "./sum";

export type CalculatorProps = {
  numbers: number[];
};

export function Calculator({ numbers }: CalculatorProps) {
  const result = sum(...numbers);
  return <h2>Result: {result}</h2>;
}

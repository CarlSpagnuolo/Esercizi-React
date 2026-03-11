import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

type CounterProps = {
  initialValue: number;
  increment: number;
};
export function Counter({ initialValue, increment }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);
  function counterIncrement() {
    setCounter((c) => c + increment);
  }
  function counterDecrease() {
    if (counter > 0) {
      setCounter((c) => c - increment);
    }
  }
  function counterReset() {
    setCounter((c) => (c = initialValue));
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={counterIncrement}>Click me to increase!</button>
      <button onClick={counterDecrease}>Click me to decrease!</button>
      <button onClick={counterReset}>Click me to reset!</button>
    </div>
  );
}

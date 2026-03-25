import { useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

type CounterProps = {
  initialValue: number;
  increment: number;
};
export function Counter({ initialValue, increment }: CounterProps) {
  const [counter, actions] = useCounter(initialValue);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function counterIncrement() {
    for (let i = 0; i < increment; i++) {
      actions.onIncrement();
    }
  }

  function counterDecrease() {
    if (counter > 0) {
      for (let i = 0; i < increment; i++) {
        actions.onDecrement();
      }
    }
  }

  function counterReset() {
    actions.onReset();
  }

  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "250px",
        margin: "20px auto",
      }}
    >
      <CounterDisplay count={counter} />

      <button onClick={counterIncrement}>Click me to increase!</button>
      <button onClick={counterDecrease}>Click me to decrease!</button>
      <button onClick={counterReset}>Click me to reset!</button>
    </div>
  );
}

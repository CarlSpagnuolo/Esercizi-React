import { useState } from "react";

export function useCounter(initialValue: number = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return [
    counter,
    {
      onIncrement: handleCounterIncrement,
      onDecrement: handleCounterDecrement,
      onReset: handleCounterReset,
    },
  ];
}

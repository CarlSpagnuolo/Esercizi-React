import { useCounter } from "./useCounter";

export function TestCounter() {
  const [counter, { onIncrement, onDecrement, onReset }] = useCounter(0);
  return (
    <div>
      <label>{counter}</label>
      <button onClick={onIncrement}>INCREMENTA</button>
      <button onClick={onDecrement}>DECREMENTA</button>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}

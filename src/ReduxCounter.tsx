import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";

// Importo le azioni che ho già creato
import { increment, decrement, reset } from "./counterSlice";

export function ReduxCounter() {
  // Leggo il valore del contatore dallo store usando hook useSelector
  const counterValue = useSelector((state: RootState) => state.counter.count);

  // Creo la funzione dispatch
  const dispatch = useDispatch();
  return (
    <div>
      {/* Mostro il valore */}
      <h2>Counter: {counterValue}</h2>

      {/* Bottoni che mandano azioni con dispatch */}
      <button onClick={() => dispatch(increment())}>Incrementa</button>
      <button onClick={() => dispatch(decrement())}>Decrementa</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

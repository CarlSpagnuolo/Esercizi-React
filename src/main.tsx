import { createRoot } from "react-dom/client";
import "./index.css";
import "./Clock.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Root } from "./Root.tsx";

createRoot(document.getElementById("root")!).render(<Root />);

// import { counterState } from "./store/counter.state";
// import { store } from "./store/store";
// import { todoState } from "./store/todos.state";
// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(counterState.actions.increment(2));
// store.dispatch(counterState.actions.decrement(1));
// store.dispatch(todoState.actions.add({ id: 1, text: "Fare la spesa" }));
// store.dispatch(todoState.actions.edit({ id: 1, text: "Fare una passeggiata" }));
// store.dispatch(todoState.actions.remove(1));
// store.dispatch(counterState.actions.reset());

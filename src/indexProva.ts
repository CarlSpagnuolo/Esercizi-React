import { store } from "./store";
import { increment } from "./counterSlice";
import { decrement } from "./counterSlice";
import { reset } from "./counterSlice";
import { addTodo, removeTodo, toggleTodo } from "./todosSlice";

//Prova funzioni contatore
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// Prova todos
store.dispatch(
  addTodo({
    id: 1,
    title: "Fare la spesa",
    completed: false,
  }),
);
store.dispatch(
  addTodo({
    id: 2,
    title: "Preparare il pranzo",
    completed: false,
  }),
);
store.dispatch(removeTodo(1));

store.dispatch(toggleTodo(2));

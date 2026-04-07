import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Definisco il tipo di un singolo todo

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Stato iniziale
type TodosState = {
  todos: Todo[];
};
const initialState: TodosState = {
  todos: [],
};
// Creo lo slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Aggiungo un nuovo todo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    // Rimuovo un todo usando l'id
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Cambio lo stato completed di un todo (toggle)
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Esporto le azioni
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

//  Esporto il reducer
export default todosSlice.reducer;

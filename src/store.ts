// Importo configureStore da Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
//  Importo il reducer del counter
import counterReducer from "./counterSlice";
// Importo il reducer dei todos
import todosReducer from "./todosSlice";
// Importo il loggingMiddleware
import { loggingMiddleware } from "./loggingMiddleware";
// Importo il delayMiddleware
import { delayMiddleware } from "./delayMiddleware";
// Importo il reducer degli utenti
import usersReducer from "./usersSlice";

//  Creo lo store e aggiungo passo passo tutto quello mi serve. Es: reducer, middleware, delaymiddleware
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware, delayMiddleware),
});

// Esporto RootState = tipo di tutto lo stato globale
export type RootState = ReturnType<typeof store.getState>;
// Esporto AppDispatch = tipo del dispatch
export type AppDispatch = typeof store.dispatch;
//  Subscribe
// Ogni volta che lo stato cambia, questo callback viene eseguito
store.subscribe(() => {
  console.log("STATO AGGIORNATO", store.getState());
});

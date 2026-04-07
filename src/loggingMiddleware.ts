import type { Middleware } from "@reduxjs/toolkit";

// Creo il middleware
export const loggingMiddleware: Middleware = (store) => (next) => (action) => {
  // Stampo l'azione che sta per essere eseguita
  console.log("Azione dispatchata:", action);

  // Passo l'azione al prossimo middleware o al reducer
  const result = next(action);

  // Dopo che lo stato è aggiornato, stampo il nuovo stato
  console.log("Stato aggiornato:", store.getState());

  // Ritorno il risultato
  return result;
};

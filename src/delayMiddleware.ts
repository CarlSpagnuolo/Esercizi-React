import type { Middleware } from "@reduxjs/toolkit";

// DelayMiddleware: ritardo ogni azione di 1 secondo
export const delayMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Ritardo middleware: azione ricevuta", action);

  // ritardo di 1 secondo
  setTimeout(() => {
    // invio l'azione al prossimo middleware o al reducer
    next(action);
    // stampo lo stato dello store dopo il delay
    console.log("Stato dopo il delay:", store.getState());
  }, 1000);

  return;
};

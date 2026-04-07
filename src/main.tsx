import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import "./index.css";
import "./Clock.scss";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./store.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);

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

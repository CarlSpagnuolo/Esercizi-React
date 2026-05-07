import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReduxCounter } from "./ReduxCounter";
import { ReduxTodos } from "./ReduxTodo";
import { ReduxGithubUsers } from "./ReduxGithubUsers";
import { Link, Route, Routes } from "react-router-dom";
import { ProvaRootContatore } from "./ProvaRootContatore";
import { ProvaRootTodos } from "./store/ProvaRootTodos";
import { ProvaRootGithubUsers } from "./ProvaRootGithubUsers";

import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser.tsx";
import { GithubUserList } from "./GithubUserList.tsx";
import { UncontrolledLogin } from "./UncontrolledLogin.tsx";
function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Link to="/" className="underline text-blue-500 mx-2">
          Benvenuto
        </Link>

        <Link to="/counter" className="underline text-blue-500 mx-2">
          Counter
        </Link>

        <Link to="/users" className="underline text-blue-500 mx-2">
          Github Users
        </Link>

        <Routes>
          <Route path="/" element={<Welcome name="Carlo" age={28} />} />

          <Route
            path="/counter"
            element={<Counter initialValue={0} increment={1} />}
          />

          <Route path="/users" element={<GithubUserList />}>
            <Route
              index
              element={
                <p className="text-gray-500 italic">
                  Aggiungi un utente e selezionalo
                </p>
              }
            />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>

          <Route
            path="*"
            element={
              <p className="text-3xl text-red-600 font-bold">Not Found</p>
            }
          />
        </Routes>

        <UncontrolledLogin />
      </div>
    </Provider>
  );
}

export default App;
{
  /* <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
          Demo Redux Toolkit
        </h1>
        <Link to="/" className="underline text-blue-500 mx-2">
          Contatore
        </Link>
        <Link to="Todos-Root" className="underline text-blue-500 mx-2">
          Todos
        </Link>
        <Link to="Github-Root" className="underline text-blue-500 mx-2">
          Github Users
        </Link> */
}

{
  /* <Route path="/" element={<ProvaRootContatore />}></Route>
          <Route path="Todos-Root" element={<ProvaRootTodos />}></Route>
          <Route path="Github-Root" element={<ProvaRootGithubUsers />}></Route>
          <Route path="user/:username" element={<GithubUserPage />}></Route> */
}

// import { Welcome } from "./Welcome";
// import { Counter } from "./Counter";
// import { Login } from "./Login";
// import { Clock } from "./Clock";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { FocusableInput } from "./FocusableInput";
// import { ReduxCounter } from "./reduxCounter";
// import { Container } from "react-bootstrap";

// export type dataProps = {
//   username: string;
//   password: string;
//   checkbox: boolean;
// };
// function handleLogin(data: dataProps) {
//   console.log("Dati ricevuti dal login:", data);
// }

// export function App() {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         textAlign: "center",
//       }}
//     >
//       {/* Componente Welcome */}
//       <h1 className="welcome">
//         <Welcome name="John" age={19} />
//       </h1>

//       {/* Spazio tra i componenti */}
//       <hr style={{ margin: "20px 0" }} />

//       {/* Contatore con useCounter */}
//       <h2>Contatore con useCounter</h2>
//       <Counter initialValue={0} increment={1} />

//       <hr style={{ margin: "20px 0" }} />

//       <Login onLogin={handleLogin} />

//       <hr style={{ margin: "20px 0" }} />

//       <Clock />
//       <UncontrolledLogin />
//       <FocusableInput />
//       <Container title="Redux">
//         <ReduxCounter />
//       </Container>
//     </div>
//   );
// }

// import { Hello } from "./HelloWorld";
// import { Welcome } from "./Welcome";

// export function App() {
//   return (
//     <div>
//       <Hello />
//       <Welcome name={<strong>Tom</strong>} age={30} />
//     </div>
//   );
// }
// import { Welcome } from "./Welcome";
// // import { CounterDisplay } from "./CounterDisplay";
// import { Counter } from "./Counter";

// export function App() {
//   return (
//     <div>
//       <h1 className="welcome">
//         <Welcome name="John" age={19} />
//       </h1>

//       <div>
//         <h1>Contatore con useCounter</h1>
//         <Counter initialValue={0} increment={2} />
//       </div>
//     </div>
//   );
// }

// import { Clock } from "./Clock";
// import { Colors } from "./Colors";

// import { FocusableInput } from "./FocusableInput";
// import { GithubUser } from "./GitHubUser";
// import { GithubUsers } from "./GithubUsers";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { MouseClicker } from "./MouseClicker";
// import { MultiButton } from "./MultiButton";
// import { TestCounter } from "./TestCounter";
// import { TodoList } from "./ToDoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { TestGithubUser } from "./TestGithubUser";
// import { useCounter } from "./useCounter";
// import { useForm } from "./useForm";
// import { useGithubUser } from "./useGithubUser";
// import { useCurrentLocation } from "./useCurrentLocation";
// import { useState } from "react";
// import { TestUseGithubUser } from "./TestUseGithubUser";
// export type dataProps = {
//   username: string;
//   password: string;
//   checkbox: boolean;
// };

// const items = [
//   { id: 1, name: "blue" },
//   { id: 2, name: "red" },
//   { id: 3, name: "yellow" },
//   { id: 4, name: "black" },
// ];

// export function App() {
//   const { form, handleChange } = useForm();
//   const { user, loadingUser, errorUser, fetchUser } = useGithubUser();
//   const { position, loading, error, getCurrentLocation } = useCurrentLocation();
//   const [counter, { onIncrement, onDecrement, onReset }] = useCounter();
//   const [githubUser, setGithubUser] = useState("");

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//   }
//   function handleLogin(data: dataProps) {
//     console.log("dati login:", data);
//   }

//   function handleGithubUser() {
//     fetchUser(githubUser);
//   }

//   return (
//     <div>
//       <Counter initialValue={0} increment={1} />
//       <Clock />
//       <MouseClicker />
//       <MultiButton />
//       <UncontrolledLogin />
//       <InteractiveWelcome />
//       <Login onLogin={handleLogin} />
//       <FocusableInput />
//       <Colors items={items} />
//       <TodoList />
//       <GithubUser username="CarlSpagnuolo" />
//       <GithubUsers />
//       <TestCounter />
//       <TestGithubUser />
//       <TestUseGithubUser />
//       <div>
//         <button onClick={getCurrentLocation}>Cerca Posizione</button>
//         {loading && <p>Caricamento...</p>}
//         {error && <p>Errore nel caricamento:{error}</p>}
//         {position && (
//           <p>
//             Latitudine:{position.latitude}, Longitudine:{position.longitude}
//           </p>
//         )}
//         <h2>Ricerca Github User</h2>
//         <input
//           value={githubUser}
//           onChange={(e) => setGithubUser(e.target.value)}
//         ></input>
//         <button onClick={handleGithubUser}>Cerca Utente Github</button>
//         {loadingUser && <p>Caricamento...</p>}
//         {errorUser && <p>Errore nel caricamento:{errorUser}</p>}
//         {user && (
//           <div>
//             <img src={user.avatar_url} alt="userimg" />
//             <p>{user.name}</p>
//             <p>{user.login}</p>
//           </div>
//         )}
//         <button onClick={onIncrement}>INCREMENTA</button>
//         <button onClick={onDecrement}>DECREMENTA</button>
//         <button onClick={onReset}>RESET</button>
//         <p>{counter}</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             onChange={handleChange}
//             value={form.email}
//             placeholder="email"
//             name="email"
//             type="email"
//             required
//           ></input>
//           <input
//             onChange={handleChange}
//             value={form.password}
//             placeholder="password"
//             name="password"
//             type="password"
//             required
//           ></input>
//           <button type="submit">Invia</button>
//         </form>
//       </div>
//     </div>
//   );
// }

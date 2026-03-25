import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { Clock } from "./Clock";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";

export type dataProps = {
  username: string;
  password: string;
  checkbox: boolean;
};
function handleLogin(data: dataProps) {
  console.log("Dati ricevuti dal login:", data);
}

export function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Componente Welcome */}
      <h1 className="welcome">
        <Welcome name="John" age={19} />
      </h1>

      {/* Spazio tra i componenti */}
      <hr style={{ margin: "20px 0" }} />

      {/* Contatore con useCounter */}
      <h2>Contatore con useCounter</h2>
      <Counter initialValue={0} increment={1} />

      <hr style={{ margin: "20px 0" }} />

      <Login onLogin={handleLogin} />

      <hr style={{ margin: "20px 0" }} />

      <Clock />
      <UncontrolledLogin />
      <FocusableInput />
    </div>
  );
}

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

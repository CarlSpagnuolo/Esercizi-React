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

// export function App() {
//   return <Welcome name="John" age={19} />;
// }

import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { TodoList } from "./ToDoList";
import { UncontrolledLogin } from "./UncontrolledLogin";

export type dataProps = {
  username: string;
  password: string;
  checkbox: boolean;
};

const items = [
  { id: 1, name: "blue" },
  { id: 2, name: "red" },
  { id: 3, name: "yellow" },
  { id: 4, name: "black" },
];

export function App() {
  function handleLogin(data: dataProps) {
    console.log("dati login:", data);
  }
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Clock />
      <MouseClicker />
      <MultiButton />
      <UncontrolledLogin />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <FocusableInput />
      <Colors items={items} />
      <TodoList />
    </div>
  );
}

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
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";

export function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Clock />
      <MouseClicker />
      <MultiButton />
    </div>
  );
}

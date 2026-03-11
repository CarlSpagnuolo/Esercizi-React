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

import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
    </div>
  );
}

import { Hello } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Tom</strong>} age={30} />
    </div>
  );
}

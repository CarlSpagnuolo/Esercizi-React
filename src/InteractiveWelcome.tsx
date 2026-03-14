import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [userName, setUserName] = useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setUserName(value);
  }
  return (
    <div>
      <input value={userName} onChange={handleInputChange}></input>
      <Welcome name={userName} />
    </div>
  );
}

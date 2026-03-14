import { useEffect, useRef, useState } from "react";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <label>Username</label>
      <input
        ref={inputRef}
        value={userName}
        name="username"
        type="text"
        onChange={(e) => setUserName(e.currentTarget.value)}
      ></input>
    </div>
  );
}

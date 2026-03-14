import { useState } from "react";
import type { dataProps } from "./App";

type onLoginFix = {
  onLogin: (data: dataProps) => void;
};

export function Login({ onLogin }: onLoginFix) {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  function handleLogin(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin(dataLogin);
  }

  function handleReset() {
    setDataLogin({
      username: "",
      password: "",
      checkbox: false,
    });
  }

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;

    setDataLogin({
      ...dataLogin,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={dataLogin.username}
          type="text"
          onChange={handleFormChange}
        ></input>
        <label>Password</label>
        <input
          name="password"
          value={dataLogin.password}
          type="password"
          onChange={handleFormChange}
        ></input>
        <label>Remember me!</label>
        <input
          name="checkbox"
          checked={dataLogin.checkbox}
          type="checkbox"
          onChange={handleFormChange}
        ></input>
      </div>
      <button
        disabled={!dataLogin.username.trim() || !dataLogin.password.trim()}
        type="submit"
      >
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

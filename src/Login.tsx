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

  const loginButtonStyle = {
    backgroundColor: dataLogin.password.length < 8 ? "red" : "green",
    color: "white",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px",
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={dataLogin.username}
          type="email"
          onChange={handleFormChange}
          placeholder="Username"
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          value={dataLogin.password}
          type="password"
          onChange={handleFormChange}
          placeholder="Password"
          required
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
        style={loginButtonStyle}
      >
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

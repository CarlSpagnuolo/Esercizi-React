import type { BaseSyntheticEvent } from "react";

export function UncontrolledLogin() {
  function handleLogin(event: BaseSyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password });
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

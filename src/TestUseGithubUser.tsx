import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function TestUseGithubUser() {
  const [userQuery, setUserQuery] = useState("");
  const [tempUserQuery, setTempUserQuery] = useState("");

  const { user, loading, error, refetch } = useGithubUser(userQuery);

  return (
    <>
      <h1>TEST DI ORA</h1>
      <input
        value={tempUserQuery}
        onChange={(e) => setTempUserQuery(e.target.value)}
      ></input>
      <button onClick={() => setUserQuery(tempUserQuery)}>CERCA</button>
      {loading && <div>Caricamento in corso...</div>}
      {error && <div>Errore durante la fetch!</div>}
      {user && (
        <div>
          <p>{user?.name}</p>
          <p>{user?.login}</p>
          <p>
            <img src={user?.avatar_url} />
          </p>
        </div>
      )}
      <button onClick={() => refetch()}>REFETCH!</button>
    </>
  );
}

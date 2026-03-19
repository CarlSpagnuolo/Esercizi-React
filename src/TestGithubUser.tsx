import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function TestGithubUser() {
  const [userQuery, setUserQuery] = useState("");
  const [tempUserQuery, setTempUserQuery] = useState("");
  const user = useGithubUser(userQuery);

  return (
    <>
      <input
        value={tempUserQuery}
        onChange={(e) => setTempUserQuery(e.target.value)}
      ></input>
      <button onClick={() => setUserQuery(tempUserQuery)}>CERCA</button>
      {user ? (
        <div>
          <p>{user?.name}</p>
          <p>{user?.login}</p>
          <p>
            <img src={user?.avatar_url} />
          </p>
        </div>
      ) : (
        <p>USER NOT FOUND!</p>
      )}
    </>
  );
}

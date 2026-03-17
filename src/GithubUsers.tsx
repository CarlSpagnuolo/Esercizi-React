import { useEffect, useState } from "react";
import { GithubUser } from "./GitHubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>GITHUB USERS:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUser(user.login)}>
              {user.login}
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}

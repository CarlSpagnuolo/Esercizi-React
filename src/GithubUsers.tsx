import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

type GitHubUserType = {
  id: number;
  login: string;
};

export function GithubUsers() {
  const [users, setUsers] = useState<GitHubUserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

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

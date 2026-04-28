import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

type GithubUser = {
  id: number;
  login: string;
};

export function GithubUserList() {
  const [users, setUsers] = useState<GithubUser[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.login}>{user.login}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

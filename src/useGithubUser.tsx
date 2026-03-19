import { useState } from "react";

type User = {
  name: string;
  login: string;
  avatar_url: string;
};

export function useGithubUser() {
  const [user, setUser] = useState<User | null>(null);
  const [errorUser, setError] = useState<string | null>(null);
  const [loadingUser, setLoading] = useState(false);

  const fetchUser = async (username: string) => {
    if (!username) return;
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  return { user, loadingUser, errorUser, fetchUser };
}

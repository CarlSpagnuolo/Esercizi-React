import { useQuery } from "@tanstack/react-query";

type User = {
  name: string;
  login: string;
  avatar_url: string;
};

export function useGithubUser(username: string | null) {
  const { data, isLoading, error, refetch } = useQuery<User>({
    queryKey: ["users", username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }
      return response.json();
    },
    enabled: !!username,
  });
  return {
    user: data,
    loading: isLoading,
    error: error,
    refetch,
  };
}

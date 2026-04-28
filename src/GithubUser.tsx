// Importo gli hook di React
// useState serve per salvare dati nello stato del componente
// useEffect serve per eseguire codice quando il componente viene montato
import { useEffect, useState } from "react";

// Tipo delle props del componente
// Il componente riceve una prop chiamata username

type GithubUserProps = {
  username: string;
};

// Tipo dell'utente GitHub
// Questo descrive i dati che riceverò dalla API

type User = {
  name: string;
  login: string;
  avatar_url: string;
};

// Componente React
// Riceve username come prop

export function GithubUser({ username }: GithubUserProps) {
  // Stato dell'utente
  // All'inizio non ho ancora dati → null
  // Quando ricevo i dati dalla API li salverò qui

  const [user, setUser] = useState<User | null>(null);

  // useEffect
  // Si esegue quando il componente viene montato
  // o quando cambia la prop username

  useEffect(() => {
    // Faccio una richiesta HTTP alla API di GitHub
    fetch(`https://api.github.com/users/${username}`)
      // Primo then → controllo la risposta del server
      .then((response) => {
        // Se la risposta non è OK (es: utente non esiste) lancio un nuovo errore: response.statusText
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // Convertiamo la risposta in JSON
        return response.json();
      })

      // Secondo then → ricevo i dati JSON dell'utente
      .then((json) => {
        // Salvo i dati nello stato
        setUser(json);
      })

      // Se succede un errore lo stampo in console
      .catch((err) => {
        console.log(err);
      });

    // useEffect dipende da username
    // quindi si riesegue se username cambia
  }, [username]);

  // Se non ho ancora l'utente
  // non mostro nulla

  if (!user) {
    return null;
  }

  // Render dei dati dell'utente

  return (
    <div>
      {!user && <h2>User not found!</h2>}

      {/* Nome dell'utente */}
      <h2>{user.name}</h2>

      {/* Username GitHub */}
      <h2>{user.login}</h2>

      {/* Avatar dell'utente */}
      <img src={user.avatar_url} />
    </div>
  );
}

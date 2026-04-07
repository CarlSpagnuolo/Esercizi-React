import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./usersSlice";
import type { RootState, AppDispatch } from "./store";

export function ReduxGithubUsers() {
  // stato locale per l'input username
  const [username, setUsername] = useState("");

  // dispatch tipizzato
  const dispatch = useDispatch<AppDispatch>();

  // prendo dati dallo store
  const users = useSelector((state: RootState) => state.users.users); // lista utenti
  const loading = useSelector((state: RootState) => state.users.loading); // stato caricamento
  const error = useSelector((state: RootState) => state.users.error); // eventuale errore

  // funzione per cercare utente
  const handleSearch = () => {
    if (username.trim() !== "") {
      dispatch(fetchUser(username)); // chiama il thunk
      setUsername(""); // pulisco input
    }
  };

  return (
    <div>
      <h2>GitHub Users</h2>

      {/* input per username */}
      <input
        type="text"
        value={username}
        placeholder="Inserisci username"
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* bottone cerca */}
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          border: "1px solid black",
          borderRadius: "4px",
          padding: "4px",
        }}
      >
        Cerca
      </button>

      {/* stato caricamento */}
      {loading && <p>Caricamento...</p>}

      {/* eventuale errore */}
      {error && <p>Errore: {error}</p>}

      {/* lista utenti */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

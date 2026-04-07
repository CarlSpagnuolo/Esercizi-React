import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Definisco il tipo di un singolo utente

type User = {
  id: number;
  login: string;
  name: string;
};

// Definisco il tipo dello stato

type UsersState = {
  users: User[]; // lista di utenti
  loading: boolean; // indica se sto caricando dati
  error: string | null; // eventuale messaggio di errore
};

// Stato iniziale

const initialState: UsersState = {
  users: [], // inizialmente nessun utente
  loading: false, // inizialmente non sto caricando
  error: null, // nessun errore iniziale
};

// Creo un thunk asincrono per fetchare un utente da GitHub
// createAsyncThunk genera automaticamente tre azioni:
// - pending (chiamata partita)
// - fulfilled (chiamata finita con successo)
// - rejected (chiamata fallita)

export const fetchUser = createAsyncThunk(
  "users/fetchUsers", // nome dell'azione
  async (username: string, { rejectWithValue }) => {
    // username passato al dispatch
    try {
      // faccio la chiamata all'API GitHub
      const result = await fetch(`https://api.github.com/users/${username}`);

      // se non va bene, lancio un errore
      if (!result.ok) {
        throw new Error("Utente non trovato");
      }

      // trasformo la risposta in JSON
      const data = await result.json();

      // ritorno solo i campi che mi interessano
      return { id: data.id, login: data.login, name: data.name };
    } catch (error: any) {
      // in caso di errore, passo il messaggio al rejectWithValue
      return rejectWithValue(error.message);
    }
  },
);

// Creo lo slice

const usersSlice = createSlice({
  name: "users", // nome dello slice
  initialState, // stato iniziale
  reducers: {
    // azione sincrona per aggiungere un utente manualmente
    addUser: (state, action) => {
      state.users.push(action.payload); // aggiunge l'utente alla lista
    },

    // azione sincrona per rimuovere un utente tramite ID
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },

  // Gestisco le azioni generate dal thunk
  // extraReducers serve a reagire a fetchUser.pending, fulfilled, rejected

  extraReducers: (builder) => {
    builder
      // quando la chiamata parte
      .addCase(fetchUser.pending, (state) => {
        state.loading = true; // sto caricando
        state.error = null; // azzero eventuali errori precedenti
      })

      // quando la chiamata va a buon fine
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false; // caricamento finito
        state.users.push(action.payload); // aggiungiamo l'utente alla lista
      })

      // quando la chiamata fallisce
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false; // caricamento finito
        state.error = action.payload as string; // salvo il messaggio di errore
      });
  },
});

// Esporto le azioni sincrone per poterle usare nei componenti
export const { addUser, removeUser } = usersSlice.actions;

// Esporto il reducer per inserirlo nello store
export default usersSlice.reducer;

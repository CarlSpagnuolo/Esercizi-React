import { useState } from "react";

// Definisco il tipo di ogni todo
// Ogni todo ha un id univoco e un nome
type TodoItem = {
  id: number;
  name: string;
};

export function TodoList() {
  // Stato della lista dei todo:
  // items è un array di oggetti TodoItem
  // setItems serve per aggiornare la lista
  const [items, setItems] = useState<TodoItem[]>([]);

  // Stato del valore dell'input:
  // inputValue contiene ciò che scrivi nella casella di testo
  // setInputValue serve per aggiornare il valore dell'input
  const [inputValue, setInputValue] = useState("");

  //  Funzione per aggiungere un nuovo todo
  const handleAdd = () => {
    // Evita di aggiungere todo vuoti
    if (inputValue.trim() === "") return;

    // Creo un nuovo oggetto TodoItem
    // id = Date.now() serve per avere un id unico
    const newItem: TodoItem = {
      id: Date.now(),
      name: inputValue,
    };

    // Aggiorno la lista: prendo tutti gli elementi esistenti e aggiungo il nuovo
    setItems([...items, newItem]);
    // Svuoto l'input dopo aver aggiunto il todo
    setInputValue("");
  };

  // Funzione per rimuovere un todo specifico
  const handleRemove = (id: number) => {
    // filter crea un nuovo array senza l'elemento con l'id specificato
    setItems(items.filter((item) => item.id !== id));
  };

  // Funzione per resettare tutta la lista
  const handleReset = () => {
    // Svuota completamente l'array items
    setItems([]);
  };

  // Render del componente

  return (
    <div>
      {/* Lista dei todo */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {/* Bottone per rimuovere il todo specifico */}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* input per scrivere nuovi todo */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* Bottone per aggiungere il nuovo todo */}
      <button onClick={handleAdd}>Aggiungi!</button>
      {/* Bottone per resettare tutta la lista */}
      <button onClick={handleReset}>Reset!</button>
    </div>
  );
}

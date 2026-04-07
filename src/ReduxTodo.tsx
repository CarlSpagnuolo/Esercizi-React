import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { addTodo, removeTodo, toggleTodo } from "./todosSlice";

export function ReduxTodos() {
  // Stato locale per input nuovo todo
  const [title, setTitle] = useState("");

  // Prendo i todos dallo store
  const todos = useSelector((state: RootState) => state.todos.todos);

  // Dispatch tipizzato
  const dispatch = useDispatch<AppDispatch>();

  // Aggiunge un nuovo todo
  const handleAddTodo = () => {
    if (title.trim() === "") return;
    dispatch(
      addTodo({
        id: Date.now(), // id unico
        title,
        completed: false,
      }),
    );
    setTitle(""); // pulisco input
  };

  return (
    <div>
      <h2>Todos</h2>

      {/* Input per nuovo todo */}
      <input
        type="text"
        value={title}
        placeholder="Nuovo todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        style={{
          border: "1px solid black",
          borderRadius: "4px",
          padding: "4px",
          backgroundColor: "green",
        }}
      >
        Aggiungi
      </button>

      {/* Lista dei todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.title}
            </span>
            <button
              style={{
                marginLeft: "10px",
                border: "1px solid black",
                borderRadius: "4px",
                padding: "4px",
                backgroundColor: "red",
              }}
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Elimina Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

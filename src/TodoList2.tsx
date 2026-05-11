import { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: string;
  text: string;
};

export function TodoList2() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const text = formData.get("text") as string;
    if (!text) {
      return;
    }
    const id = Math.random().toString(36).substring(2);
    setTodos((todos) => [
      ...todos,
      {
        id,
        text,
      },
    ]);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input placeholder="Todo Name" name="text" />
        <Button type="submit">Add Todo</Button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

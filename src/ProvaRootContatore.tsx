import { useNavigate } from "react-router";
import { ReduxCounter } from "./ReduxCounter";
import { Button } from "react-bootstrap";

export function ProvaRootContatore() {
  const navigate = useNavigate();
  function handleGoToReduxTodos() {
    navigate("/Todos-Root");
  }
  return (
    <section style={{ marginBottom: "60px" }}>
      <ReduxCounter />
      <Button onClick={handleGoToReduxTodos}>Vai a Todos</Button>
    </section>
  );
}

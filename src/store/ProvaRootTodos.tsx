import { Button } from "react-bootstrap";
import { ReduxTodos } from "../ReduxTodo";
import { useNavigate } from "react-router";

export function ProvaRootTodos() {
  const navigate = useNavigate();
  function handleGoToReduxGithubUsers() {
    navigate("/Github-Root");
  }
  return (
    <section style={{ marginBottom: "60px" }}>
      <ReduxTodos />
      <Button onClick={handleGoToReduxGithubUsers}>Vai a Github Users</Button>
    </section>
  );
}

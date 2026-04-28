import { Button } from "react-bootstrap";
import { ReduxGithubUsers } from "./ReduxGithubUsers";
import { useNavigate } from "react-router";

export function ProvaRootGithubUsers() {
  const navigate = useNavigate();
  function handleGoToReduxCounter() {
    navigate("/");
  }
  return (
    <section style={{ marginBottom: "60px" }}>
      <ReduxGithubUsers />
      <Button onClick={handleGoToReduxCounter}>Ritorna al contatore</Button>
    </section>
  );
}

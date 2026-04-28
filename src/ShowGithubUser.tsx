import { Container } from "react-bootstrap";
import { GithubUser } from "./GithubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const params = useParams();
  return (
    <Container title="Github User">
      <GithubUser username={params.username!} />
    </Container>
  );
}

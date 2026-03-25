import { useEffect, useRef, useState } from "react";
import { Form, Container, Card } from "react-bootstrap";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow">
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={inputRef}
              type="text"
              placeholder="Inserisci username"
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
            />
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}

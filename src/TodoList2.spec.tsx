import { TodoList2 } from "./TodoList2";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<TodoList2/>", () => {
  it("allows the user to add a todo to the list", async () => {
    render(<TodoList2 />);

    const input = screen.getByPlaceholderText("Todo Name");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);

    const element = await screen.findByText("Learn React");
    expect(element).toBeInTheDocument();
  });
});

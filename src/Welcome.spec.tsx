import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Welcome } from "./Welcome";

expect.extend(matchers);

describe("<Welcome />", () => {
  it("shows the welcome message with name and age", () => {
    const { container } = render(<Welcome name="Carlo" age={27} />);
    expect(container).toHaveTextContent("Welcome Carlo! You are 27 years old!");
  });

  it("shows the welcome message without age", () => {
    const { container } = render(<Welcome name="Carlo" />);
    expect(container).toHaveTextContent("Welcome Carlo!");
  });
});

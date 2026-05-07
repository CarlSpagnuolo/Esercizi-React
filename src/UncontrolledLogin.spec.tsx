import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UncontrolledLogin } from "./UncontrolledLogin";

expect.extend(matchers);

describe("<UncontrolledLogin />", () => {
  it("shows uncontrolled login form", () => {
    const { container } = render(<UncontrolledLogin />);
    expect(container).toHaveTextContent("Email");
    expect(container).toHaveTextContent("Password");
    expect(container).toHaveTextContent("Login");
  });
});

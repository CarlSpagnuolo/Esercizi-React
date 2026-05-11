import * as matchers from "@testing-library/jest-dom/matchers";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Calculator } from "./Calculator";

expect.extend(matchers);

describe("<Calculator />", () => {
  it("shows the sum of the numbers received as a prop", () => {
    render(<Calculator numbers={[1, 2, 3]} />);
    const element = screen.queryByText("Result: 6");
    expect(element).toBeInTheDocument();
  });
});

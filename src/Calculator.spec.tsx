import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Calculator } from "./Calculator";

expect.extend(matchers);

describe("<Calculator />", () => {
  it("shows the sum of the numbers received as a prop", () => {
    const { container } = render(<Calculator numbers={[1, 2, 3]} />);
    expect(container).toHaveTextContent("Result: 6");
  });
});

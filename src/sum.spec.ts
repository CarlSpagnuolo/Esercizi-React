import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe(sum, () => {
  it("sums all the numbers in the array", () => {
    const result = sum(1, 2, 3);
    expect(result).toBe(6);
  });
});

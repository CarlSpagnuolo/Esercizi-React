import * as matchers from "@testing-library/jest-dom/matchers";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { server } from "./MockServer";

expect.extend(matchers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

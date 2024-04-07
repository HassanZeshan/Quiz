import { describe, it, expect, vi } from "vitest";

vi.mock("@api/quiz");

describe("App Component", () => {
  it("add two numbers", () => {
    const num = 2;
    expect(num).toEqual(2);
  });
});

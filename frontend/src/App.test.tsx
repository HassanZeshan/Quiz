import { describe, it, expect, vi } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";
import { fetchQuizzes } from "@api/quiz";

import { mockQuestions } from "./test/mockData";

vi.mock("@api/quiz", () => ({ fetchQuizzes: vi.fn() }));

describe("App", () => {
  it("renders the app component", async () => {
    (fetchQuizzes as any).mockResolvedValue(mockQuestions);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Cint Quiz")).toBeInTheDocument();
      // expect(screen.getByText("Test Question")).toBeInTheDocument();
      // expect(screen.getByText("Start Quiz")).toBeInTheDocument();
      // expect(screen.getByText("Restart Quiz")).toBeInTheDocument();
    });
  });
});

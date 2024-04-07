import { render, fireEvent } from "@testing-library/react";
import QuizInitiator from "./QuizInitiator";
import { describe, expect, it, vi } from "vitest";
import { useQuizContext } from "@context/quizContext";

const startQuizMock = vi.fn();
vi.mock("@context/quizContext", () => ({
  useQuizContext: () => ({
    startQuiz: startQuizMock,
  }),
}));

describe("QuizInitiator", async () => {
  it("calls startQuiz function with the provided questions when 'Start Quiz' button is clicked", () => {
    const { getByRole } = render(<QuizInitiator />);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(startQuizMock).toHaveBeenCalled();
    expect(useQuizContext().startQuiz).toHaveBeenCalledWith();
  });
});

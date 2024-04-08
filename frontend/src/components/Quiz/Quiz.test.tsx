import { render } from "@testing-library/react";
import Quiz from "./Quiz";
import { describe, expect, it, vi } from "vitest";

vi.mock("@context/quizContext", () => ({
  useQuizContext: () => ({
    currentQuestionIndex: 0,
    correctAnswers: 0,
    attemptedQuestion: 0,
    finalScore: -1,
    nextQuestion: vi.fn(),
    currentQuestion: {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
      answers: ["Paris", "London", "Berlin", "Madrid"],
      selectedValue: "",
    },
    questions: [
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "easy",
        question: "What is the capital of France?",
        correct_answer: "Paris",
        incorrect_answers: ["London", "Berlin", "Madrid"],
        answers: ["Paris", "London", "Berlin", "Madrid"],
        selectedValue: "",
      },
    ],
  }),
}));

describe("Quiz", () => {

  it("renders the current question details", () => {
    const { getByText, getByRole } = render(<Quiz/>);
    expect(getByText("What is the capital of France?")).toBeInTheDocument();
    expect(getByText("Difficulty:")).toBeInTheDocument();
    expect(getByRole("button", { name: "Next Question" })).toBeInTheDocument();
  });
});

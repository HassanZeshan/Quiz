import { describe, it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchQuizzes } from "@api/quiz";

const mockQuestion = {
  category: "General Knowledge",
  type: "multiple",
  difficulty: "easy",
  question: "What is the capital of France?",
  correct_answer: "Paris",
  incorrect_answers: ["London", "Berlin", "Madrid"],
  answers: ["Paris", "London", "Berlin", "Madrid"],
  selectedValue: "",
};
vi.mock("@api/quiz", () => ({
  fetchQuizzes: vi.fn(() => Promise.resolve([mockQuestion])),
}));
const mockInitialize = vi.fn();
vi.mock("@context/quizContext", () => ({
  useQuizContext: () => ({
    initializeQuiz: mockInitialize,
    questions: [mockQuestion],
    currentQuestion: mockQuestion,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    attemptedQuestion: 0,
    finalScore: -1,
  }),
}));

describe("App", () => {
  it("renders the Quiz component when questions are available", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText("Cint Quiz")).toBeInTheDocument());
    expect(getByText("What is the capital of France?")).toBeInTheDocument();
  });

  it("initializes the quiz context with data fetched from the API", async () => {
    render(<App />);
    await waitFor(() => expect(fetchQuizzes).toHaveBeenCalled());
    expect(mockInitialize).toHaveBeenCalledWith([mockQuestion]);
  });
});

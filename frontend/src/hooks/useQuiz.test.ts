import { renderHook, act } from "@testing-library/react-hooks";
import { useQuiz } from "./useQuiz";
import { QuizItem } from "../types";
import { describe, expect, it } from "vitest";

describe("useQuiz", () => {
  const quiz: QuizItem[] = [
    {
      category: "Test Category",
      type: "multiple",
      difficulty: "easy",
      question: "Test Question",
      correct_answer: "Correct Answer",
      incorrect_answers: ["Incorrect Answer 1", "Incorrect Answer 2"],
      answers: [],
      selectedValue: "",
    },
  ];
  it("should start the quiz correctly", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.startQuiz(quiz);
    });

    expect(result.current.currentQuestionIndex).toEqual(0);
    expect(result.current.questions.length).toBeGreaterThan(0);
  });

  it("should handle next question correctly", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.startQuiz(quiz);
    });
    act(() => {
      result.current.nextQuestion("Correct Answer");
    });

    expect(result.current.currentQuestionIndex).toEqual(1);
    expect(result.current.correctAnswers).toEqual(1);
    expect(result.current.finalScore).toBeGreaterThanOrEqual(0);
  });

  it("should reset the quiz correctly", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.startQuiz(quiz);
    });
    act(() => {
      result.current.nextQuestion("Correct Answer");
    });
    act(() => {
      result.current.restartQuiz();
    });

    expect(result.current.currentQuestionIndex).toEqual(0);
    expect(result.current.correctAnswers).toEqual(0);
    expect(result.current.finalScore).toEqual(-1);
  });
});

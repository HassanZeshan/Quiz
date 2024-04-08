import { render } from "@testing-library/react";
import Question from "./Question";
import { describe, expect, it, vi } from "vitest";

vi.mock("@context/quizContext", () => ({
  useQuizContext: () => ({
    currentQuestion: {
      question: "Sample question text?",
      type: "multiple",
      answers: ["Option 1", "Option 2", "Option 3"],
    },
  }),
}));
describe("Question", () => {
 
  it("renders question text and appropriate form component based on the question type", () => {
    const { getByLabelText } = render(<Question />);
    expect(getByLabelText("Option 1")).toBeInTheDocument();
    expect(getByLabelText("Option 2")).toBeInTheDocument();
    expect(getByLabelText("Option 3")).toBeInTheDocument();
  });

});

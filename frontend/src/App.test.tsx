// import { render, screen, waitFor } from "@testing-library/react";
// import App from "./App";
// import { fetchQuizzes as mockFetchQuizzes } from "@api/quiz"; // Assuming you have a mock for fetchQuizzes
import { describe, it, expect } from "vitest";

// jest.mock("@api/quiz");

describe("App Component", () => {
  it("add two numbers", () => {
    const num = 2;
    expect(num).toEqual(2);
  });
  // it("renders App component", async () => {
  //   const quizzesData = [
  //     { id: 1, question: "Question 1", answer: "Answer 1" },
  //     { id: 2, question: "Question 2", answer: "Answer 2" },
  //   ];

  //   mockFetchQuizzes.mockResolvedValueOnce(quizzesData);

  //   render(<App />);

  //   expect(screen.getByText("Cint Quiz")).toBeInTheDocument();

  //   // Wait for quizzes to load
  //   await waitFor(() =>
  //     expect(screen.getByText("Question 1")).toBeInTheDocument();
  //   );

  //   // it if all quizzes are rendered
  //   expect(screen.getByText("Question 1")).toBeInTheDocument();
  //   expect(screen.getByText("Question 2")).toBeInTheDocument();

  //   // You can write more specific tests based on your application logic
  // });

  // it("handles error gracefully", async () => {
  //   mockFetchQuizzes.mockRejectedValueOnce(
  //     new Error("Failed to fetch quizzes")
  //   );

  //   render(<App />);

  //   expect(screen.getByText("Cint Quiz")).toBeInTheDocument();

  //   // Wait for error to be displayed
  //   await waitFor(() =>
  //     expect(screen.getByText("Error loading data:")).toBeInTheDocument()
  //   );
  // });
});

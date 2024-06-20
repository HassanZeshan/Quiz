import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quiz } from "@components/Quiz";
import { fetchQuizzes } from "@api/quiz";

import { useQuizContext } from "@context/quizContext";

const App = () => {
  const {
    initializeQuiz,
    questions,
    error,
    setError,
    isLoading,
    setIsLoading,
  } = useQuizContext();

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      const data = await fetchQuizzes();
      initializeQuiz(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      let errorMessage = "An error occurred while loading the quizzes.";
      if (error instanceof Error && error.message.includes("Failed to fetch")) {
        errorMessage =
          "A network error occurred. Please check your connection and try again.";
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="row text-center justify-content-center gy-6">
      <h1 className="mb-6">Cint Quiz</h1>
      <div className="row justify-content-center gx-5 gy-5">
        {error ? (
          <p>Error: {error}</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          questions && <Quiz />
        )}
      </div>
    </div>
  );
};

export default App;

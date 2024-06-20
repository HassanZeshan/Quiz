import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quiz } from "@components/Quiz";
import { fetchQuizzes } from "@api/quiz";

import { useQuizContext } from "@context/quizContext";

const App = () => {
  const { initializeQuiz, questions } = useQuizContext();
  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      const data = await fetchQuizzes();
      initializeQuiz(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return (
    <div className="row text-center justify-content-center gy-6">
      <h1 className="mb-6">Cint Quiz</h1>
      <div className="row justify-content-center gx-5 gy-5">
        {questions && <Quiz />}
      </div>
    </div>
  );
};

export default App;

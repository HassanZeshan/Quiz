import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Quiz } from "@components/Quiz";
import { fetchQuizzes } from "@api/quiz";
import { QuizItem } from "./types";
import QuizProvider from "@context/quizContext";

const App = () => {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      const data = await fetchQuizzes();
      setQuizzes(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return (
    <QuizProvider>
      <div className="row text-center gy-6">
        <h1 className="mb-6">Cint Quiz</h1>
        <div className="row justify-content-center gx-5 gy-5">
          {quizzes && <Quiz questions={quizzes} />}
        </div>
      </div>
    </QuizProvider>
  );
};

export default App;

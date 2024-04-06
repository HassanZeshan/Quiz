import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QuizItem, Quiz } from "./components/Quiz";

const App = () => {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/quiz");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { results } = await response.json();

      setQuizzes(results);
    } catch (e) {
      console.log("Error Loading data", e);
    }
  };

  return (
    <div className="row text-center gy-6 ">
      <h1>Cint Quiz</h1>

      <div className="row justify-content-center gx-5 gy-5">
        {quizzes && <Quiz questions={quizzes} />}
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QuizItem, Quiz } from "@components/Quiz";
import { fetchQuizzes } from "@api/quiz";

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
    <div className="row text-center gy-6 ">
      <h1>Cint Quiz</h1>

      <div className="row justify-content-center gx-5 gy-5">
        {quizzes && <Quiz questions={quizzes} />}
      </div>
    </div>
  );
};

export default App;

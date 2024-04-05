import { useEffect, useState } from "react";

import "./App.css";
import { QuizItem, Quiz } from "./components/Quiz";
import axios from "axios";

const App = () => {
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/quiz");

      setQuizzes(data);
    } catch (e) {
      console.log("Error Loading data", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="container mx-auto mt-8">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Cint Quiz</h1>
        </header>
        <div className="container mx-auto mt-8">
          {quizzes && <Quiz questions={quizzes} />}
        </div>
      </div>
    </div>
  );
};

export default App;

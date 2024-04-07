import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import QuizProvider from "@context/quizContext";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

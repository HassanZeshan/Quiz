# Cint Assignment

## Overview

This project is divided into two parts: frontend and backend. The backend is developed using Node.js and Express, while the frontend is developed using React, TypeScript, and Bootstrap.

## Getting Started

## Prerequisites

Before starting development, ensure you have the following installed:

- Node.js (<https://nodejs.org/>)
  - npm (Node Package Manager, comes with Node.js)
  - Git (<https://git-scm.com/>)

## Frontend

This frontend application is developed using React, TypeScript, Bootstrap, and Vite. It provides a user interface for interacting with the quiz data served by the backend.

Navigate to the frontend directory.
Install dependencies using the following command:

```node
npm install
npm run dev
```

- Ensure that the backend server is running on port 3001. If it's running on a different port, update the VITE_APP_BASE_PATH variable in the .env file.

### Running Tests & Build

To build the frontend for production and testing:

```node
npm run build
npm run test
```

### Working

- The application retrieves data from the server and generates quizzes randomly based on the fetched data.
- Restarting the quiz results in the regeneration of questions with random selection.
- The options for each question are also randomly generated, providing variation in each quiz attempt.
- Users can proceed to the next question without answering the current one, with the assumption that answered questions are tracked in the summary.
- The current question number and its corresponding category and difficulty are highlighted in the header for easy navigation and identification.
- Testing can be enhanced as it currently focuses solely on happy path scenarios.

### Possible Improvements

- Implement functionality to add questions by category, allowing users to customize their quiz experience.
- Gradually increase the difficulty level of questions to provide a progressive challenge for users.
- Display the difficulty level of each question in the summary section to provide additional context and information to users.

## Backend

This backend application serves as the server-side component of the project. It is responsible for handling requests related to quizzes.
The backend reads quiz data from a data.json file located in the root of the backend folder.

- Navigate to the backend directory.
- Install dependencies using the following command

```node
npm install
npm start
```

- By default, the backend runs on port 3001. You can specify a different port by setting the API_PORT environment variable.

```node
API_PORT = XXXX;
```

## API Endpoint

### Get Quiz

- Endpoint: /api/quiz
- Method: GET
- Description: Retrieves quiz data from the data.json file.
- Response: Returns a JSON object containing quiz data.

```bash
GET http://localhost:3001/api/quiz
```

### Development Workflow

- Backend Development: Make changes to the backend code located in the backend directory.
  Restart the backend server to apply changes.
- Frontend Development: Make changes to the frontend code located in the frontend directory. The development server will hot-reload changes automatically.

## Technologies Used

### Backend Tech

Node.js
Express

### Frontend Tech

- React
- TypeScript
- Bootstrap
- Vite

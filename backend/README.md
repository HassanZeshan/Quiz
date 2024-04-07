# Backend

## Overview

This backend application serves as the server-side component of the project. It is responsible for handling requests related to quizzes. 
The backend reads quiz data from a data.json file located in the root of the backend folder.

## Getting Started

### Prerequisites

Before starting the backend, ensure you have the following installed:

Node.js (<https://nodejs.org/>)
npm (Node Package Manager, comes with Node.js)

### Installation and Start

```node

npm install
npm run start

```

- By default, the backend runs on port 3001. You can specify a different port by setting the API_PORT environment variable.

```node
API_PORT=XXXX
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

const apiBasePath = import.meta.env.VITE_APP_BASE_PATH;
if (!apiBasePath) {
  throw new Error("API base path is not defined in the environment variables");
}
const endpoint = "/api/quiz";
const apiUrl = `${apiBasePath}${endpoint}`;

export const fetchQuizzes = async () => {
    
    const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      const { results } = await response.json();

      if (!Array.isArray(results)) {
        throw new Error("Invalid response format: results is not an array");
      }
  
    return results;
  };
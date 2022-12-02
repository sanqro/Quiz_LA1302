import { updateQuestion } from "./module/quizHandler.js"

async function fetchQuestions() {
  let url = "http://localhost:8080/questions";
  let response = await fetch(url);
  const questions = await response.json();
  return questions;
}

let fetchedQuestions = await fetchQuestions();
window.questions = fetchedQuestions.questions;
window.score = 0;
window.questionIndex = 0;
window.hearts = 3;


updateQuestion();

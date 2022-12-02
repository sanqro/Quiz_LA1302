import { levenshteinDistance } from "./levenshteinDistance.js";
import { currentQuestion, addScore, subtractHearts, updateQuestion } from "./quizHandler.js";
import { showAlert } from "./alert.js";

export function registerUserInputMultipleChoice(id) {
    let button = document.getElementById(id);
    button.onclick = function () {
        let answer = document.getElementById(id).innerHTML;
        answerHandler(answer);
        updateQuestion();
    };
}

export function registerUserInputText(id) {
    let button = document.getElementById(id);
    button.onclick = function () {
        let answer = document.getElementById("userTextInput").value;
        answerHandler(answer);
        updateQuestion();
    };
}

function answerHandler(userAnswer) {
    if (currentQuestion().solution === userAnswer) {
        addScore();
    } else if (currentQuestion().questionType === "text") {
        if (levenshteinDistance(currentQuestion().solution, userAnswer) === 1) {
            showAlert();
        }
        else {
            subtractHearts();
        }
    }
    else {
        subtractHearts();
    }
    window.questionIndex += 1;
}
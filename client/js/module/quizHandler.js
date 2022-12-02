import { registerUserInputMultipleChoice, registerUserInputText } from "./userInputHandler.js";

export function updateQuestion() {
    if (!(window.questions.length === window.questionIndex)) {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = currentQuestion().question;

        if (currentQuestion().questionType == "choice") {
            showMultipleChoice();
        }
        else if (currentQuestion().questionType == "text") {
            showTextInput();
        }

        updateHearts();
        updateProgress();
    } else {
        showEnd();
    }
}

function showTextInput() {
    document.getElementById("choice-or-text").innerHTML = `
  <form method="post">
    <div class="userTextInput-form">
      <input type="text" id="userTextInput" />
      <input id="button" type="submit" name="button" value="Eingeben" />
    </div>
  </form>`;
    registerUserInputText("button");
}

function showMultipleChoice() {
    document.getElementById("choice-or-text").innerHTML = `
    <div class="choices">
        <button id="0"></button>
        <button id="1"></button>
        <button id="2"></button>
        <button id="3"></button>
    </div>
`;
    let choices = currentQuestion().choice;
    for (let i = 0; i < choices.length; i++) {
        let choiceButton = document.getElementById(i);
        choiceButton.innerHTML = choices[i];
        registerUserInputMultipleChoice(i);
    }
}

export function showEnd() {
    let endText;

    if (window.score == window.questions.length) {
        endText = `Du hast alle ${window.questions.length} Fragen richtig beantwortet😳👍`;
    } else if (window.score >= window.questions.length / 2) {
        endText = `Du hast ${window.score} von ${window.questions.length} richtig!🙂`;
    } else if (window.score < window.questions.length / 2 && window.score >= 1) {
        endText = `Du hast ${window.score} von ${window.questions.length} richtig!🙁`;
    } else if (window.score === 0) {
        endText = `Du hast leider keine Fragen richtig😢`;
    }

    document.getElementById("quiz-container").innerHTML = `
  <h1>Das Quiz ist zu Ende!</h1>
  <h2> ${endText} </h2>
        
  <table id="statistics">
    <caption>Deine Statistiken zum Quiz:</caption>
      <tr>
        <th>Totale Fragen:</th>
        <td>${window.questions.length}</td>
      </tr>
      <tr>
        <th>Fragen beantwortet:</th>
        <td>${window.questionIndex}</td>
      </tr>
      <tr>
        <th>Richtige Versuche:</th>
        <td>${window.score}</td>
      </tr>
      <tr>
        <th>Falsche Versuche:</th>
        <td>${window.questionIndex - window.score}</td>
      </tr>
    </table>
    <div class="quiz-restart">
        <a href="index.html">Quiz neustarten?</a>
    </div>`;
}

function updateProgress() {
    document.getElementById("progress-bar").innerHTML = `Frage ${window.questionIndex + 1} von ${window.questions.length}`;
}

export function updateHearts() {
    let hearts = document.getElementById("hearts-text");
    hearts.innerHTML = window.hearts;

    if (window.hearts <= 0) {
        showEnd();
    }
}

export function subtractHearts() {
    window.hearts -= 1;
    updateHearts();
}

export function addScore() {
    window.score += 1;
}

export function currentQuestion() {
    return window.questions[window.questionIndex];
}

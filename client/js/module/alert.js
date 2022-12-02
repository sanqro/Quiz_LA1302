import { addScore, subtractHearts } from "./quizHandler.js";

export function showAlert() {
  const alertHTML =
    `<p>Hast du dich vertippt?</p>
       <div id="confirm" class="confirm">
          <button id="yes">Ja</button>
          <button id="no">Nein</button>
        </div>`;

  const alertElement = document.createElement("div");
  alertElement.setAttribute("id", "alert");
  alertElement.innerHTML = alertHTML;
  document.body.appendChild(alertElement);

  document.getElementById("yes").onclick = function () {
    addScore();
    const alert = document.getElementById("alert");
    alert.parentNode.removeChild(alert);
  }

  document.getElementById("no").onclick = function () {
    subtractHearts();
    const alert = document.getElementById("alert");
    alert.parentNode.removeChild(alert);
  }

}
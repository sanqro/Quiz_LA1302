// Diese Funktion wurde eigentlich 1 zu 1 von folgender Quelle kopiert: https://www.30secondsofcode.org/js/s/levenshtein-distance

export function levenshteinDistance(solution, userInput) {
  if (!solution.length) return userInput.length;
  if (!userInput.length) return solution.length;
  const arr = [];
  for (let i = 0; i <= userInput.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= solution.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
            arr[i - 1][j] + 1,
            arr[i][j - 1] + 1,
            arr[i - 1][j - 1] + (solution[j - 1] === userInput[i - 1] ? 0 : 1)
          );
    }
  }
  return arr[userInput.length][solution.length];
};

export function currentQuestion() {
  return window.questions[window.questionIndex];
}

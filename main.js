// UI Components
//  - We grab the DOM elements we need to work with to make our code cleaner.
const nameElement = document.getElementById('name');
const exerciseElement = document.getElementById('exercise');
const exerciseGoalElement = document.getElementById('exercise_goal');
const outputElement = document.getElementById('output');
const successElement = document.getElementById('success');
const failureElement = document.getElementById('failure');

helpButtonElement.addEventListener('click', () => {
    const tiles = racks[turn].getAvailableTiles();
    const possibilities = utils.bestPossibleWords(tiles);
    const hint =
      possibilities.length === 0
        ? 'no words!'
        : possibilities[Math.floor(Math.random() * possibilities.length)];
    hintElement.innerText = hint;
  });
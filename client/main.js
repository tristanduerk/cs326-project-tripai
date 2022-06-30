import { Weight } from './weight.js';

const weight = new Weight();

// UI Components
//  - We grab the DOM elements we need to work with to make our code cleaner.
const nameElement = document.getElementById('name');
const exerciseElement = document.getElementById('exercise');
const exerciseGoalElement = document.getElementById('exercise_goal');
const outputElement = document.getElementById('outputs');
const successElement = document.getElementById('success');
const failureElement = document.getElementById('failure');

successElement.addEventListener('click', () => {
    weight.saveExercise('true');
    weight.render(outputElement);
  });

  failureElement.addEventListener('click', () => {
    weight.saveExercise('false');
    weight.render(outputElement);
  });

  exerciseElement.addEventListener('click', () => {
    weight.exercise = exerciseElement.value;
    weight.render(outputElement);
  });

  exerciseGoalElement.addEventListener('click', () => {
    weight.goal = exerciseGoalElement.value;
    weight.render(outputElement);
  });

  nameElement.addEventListener('change', (event) => {
    weight.name = nameElement.value;
  });


 
  weight.render(outputElement);

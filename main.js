import { Weight } from './weight.js';

// UI Components
//  - We grab the DOM elements we need to work with to make our code cleaner.
const nameElement = document.getElementById('name');
const exerciseElement = document.getElementById('exercise');
const exerciseGoalElement = document.getElementById('exercise_goal');
const outputElement = document.getElementById('outputs');
const successElement = document.getElementById('success');
const failureElement = document.getElementById('failure');

successElement.addEventListener('click', () => {
    //TODO: Add weight upon success
  });

  failureElement.addEventListener('click', () => {
    //TODO: Lower weight upon failure
  });

  exerciseElement.addEventListener('click', () => {
    //TODO: Based on which exercise they pick, 
  });

  exerciseGoalElement.addEventListener('click', () => {
    //TODO: Based on what exercise goal they have, create an exercise plan for the person
  });

  let weight = new Weight();
  weight.render(outputElement);

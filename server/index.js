import chalkAnimation from 'chalk-animation';
import { database } from './database.js';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

app.post('/saveExercise', async (request, response) => {
  const options = request.body;
  await database.saveExercise(options.exerciseName, options.exerciseElements);
  response.status(200).json({ 'status' : 'success' });
});

app.get('/loadExercise', async (request, response) => {
  const name = request.query.name;
  const exerciseElements = await database.loadExercise(name);
  response
    .status(200)
    .header({
      'Content-Type': 'application/json',
    })
    .json(exerciseElements);
});

app.post('/saveUser', async (request, response) => {
  const options = request.body;
  await database.saveUser(options.userName, options.goalName);
  response.status(200).json({ 'status' : 'success' });
});

// This matches all routes that are not defined.
app.all('*', async (request, response) => {
  response.status(404).send(`Not found: ${request.path}`);
});

// Start the server.
app.listen(port, () => {
  const msg = `Server started on http://localhost:${port}`;
  const rainbow = chalkAnimation.rainbow(msg);

  // Have the rainbow stop so we can log stuff to the console.
  setTimeout(() => {
    rainbow.stop(); // Animation stops
  }, 2000);
});

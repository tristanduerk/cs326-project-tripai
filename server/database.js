import { readFile, writeFile } from 'fs/promises';

/** A class representing a database to store scores */
class Database {
  constructor() {
    this.path = 'lift_data.json';
  }

  async saveExercise(exerciseName, exerciseElements) {
    const data = await this._read();
    data.exercises[exerciseName] = exerciseElements;
    await this._write(data);
  }

  async loadExercise(exerciseName) {
    const data = await this._read();
    const exerciseElements = data.exercises[exerciseName];
    return exerciseElements;
  }

  // This is a private methods. The _ prefix means that they are private.

  async _read() {
    try {
      const data = await readFile(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return { exercises: {
        'Bench Press': {
          'weight': 45,
          'sets': 3,
          'reps': 5,
          'success': true
        },
        'Back Squat': {
          'weight': 45,
          'sets': 3,
          'reps': 5,
          'success': true
        },
        'Deadlift': {
          'weight': 45,
          'sets': 3,
          'reps': 5,
          'success': true
        }
      }, goals: ['Strength', 'Hypertrophy', 'Athleticism'] };
    }
  }

  async _write(data) {
    await writeFile(this.path, JSON.stringify(data), 'utf8');
  }
}

const database = new Database();

export { database };

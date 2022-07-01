import { readFile, writeFile } from 'fs/promises';
import pg from 'pg-pool';
const Pool = pg;

/** A class representing a database to store scores */

class Database {
  constructor() {
    this.path = 'lift_data.json';
    this._pool = new Pool({
      user: 'weightlifter',
      database: 'weightdata',
      password: 'password',
      port: 5432,
      host: 'localhost',
    });
  }

  async saveExercise(exercise, elements) {
    try {
      const res  = await this._pool.query('UPDATE exercises SET weight = $1, sets = $2, reps = $3 WHERE name = $4', [
        elements.weight,
        elements.sets,
        elements.reps,
        exercise
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  async saveUser(username, goal) {
    try {
      const res  = await this._pool.query('INSERT INTO users (users, goal) VALUES ($1, $2)', [
        username,
        goal
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  async loadExercise(exercise) {
    try {
      const res  = await this._pool.query('SELECT * FROM exercises WHERE name = $1', [exercise]);
      const row = res.rows[0];
      return row;
    } catch (err) {
      console.error(err);
    }
  }

}

const database = new Database();

export { database };

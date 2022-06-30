export class Weight {
    constructor() {
        this._name = 'Default';
        this._exercise = 'Bench Press';
        this._goal = 'Strength';
    }

    get name() {
        return this._name;
    }
    
    set name(name) {
        this._name = name;
    }

    get exercise() {
        return this._exercise;
    }
    
    set exercise(exercise) {
        this._exercise = exercise;
    }

    get goal() {
        return this._goal;
    }

    set goal(goal) {
        this._goal = goal;
    }

    async saveExercise(success) {
        this._exerciseElements['success'] = success;
        let suggestedWeight = parseFloat(this._exerciseElements['weight']);
        if (success == 'true') {
            suggestedWeight += 5;
        } else {
            suggestedWeight -= 5;
        }
        this._exerciseElements['weight'] = suggestedWeight;

        let data = {};
        data['exerciseName'] = this._exercise;
        data['exerciseElements'] = this._exerciseElements;
        try {
            const response = await fetch(`/saveExercise`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },  
              body: JSON.stringify(data)
            });
        } catch (err) {
            console.log(err);
        }
    }

    async saveUser() {
        let data = {};
        data['userName'] = this._name;
        data['goalName'] = this._goal;
        try {
            const response = await fetch(`/saveUser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },  
              body: JSON.stringify(data)
            });
        } catch (err) {
            console.log(err);
        }
    }

    async loadExercise() {
        try {
            const url = (
                `/loadExercise?` + 
                new URLSearchParams({name: this._exercise }).toString()
            );
            const response = await fetch(url, 
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
            this._exerciseElements = await response.json();
        } catch (err) {
            console.log(err);
        }
    }

    async render(element) {

        await this.loadExercise();

        element.innerHTML = '';
        
        let div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_name')
        div.innerText = this._exercise;
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_weight')
        div.innerText = 'Weight: ' + this._exerciseElements['weight']; //TODO: Calculate proper weight
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_sets')
        div.innerText = 'Sets: ' + this._exerciseElements['sets']; //TODO: Change rep scheme based on goals
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_reps')
        div.innerText = 'Reps: ' + this._exerciseElements['reps']; //TODO: Change rep scheme based on goals
        element.appendChild(div);
    }

}

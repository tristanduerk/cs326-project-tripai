export class Weight {
    constructor() {
        this.exercise = "Bench Press";
        this.exerciseGoal = "Strength";
    }

    set exercise(exercise) {
        this._exercise = exercise;
    }

    get exercise() {
        return this._exercise;
    } 
    
    saveExercise(success) {
        this.exerciseElements['success'] = success;
        let suggestedWeight = parseFloat(this.exerciseElements['weight']) + 5.0;
        this.exerciseElements['weight'] = suggestedWeight;
        localStorage.setItem(this._exercise, JSON.stringify(this.exerciseElements));
    }

    _loadExercise() {
        const data = localStorage.getItem(this._exercise);
        if (data === null || data == 'undefined') {
            //TODO: If  not exist, use defaults
            this.exerciseElements = {};
            this.exerciseElements['weight'] = 45;
            this.exerciseElements['sets'] = 3;
            this.exerciseElements['reps'] = 5;
            this.exerciseElements['success'] = 'true';
            localStorage.setItem(this._exercise, JSON.stringify(this.exerciseElements));
        } else {
            this.exerciseElements = JSON.parse(data);
        }

    }

    render(element) {

        this._loadExercise();

        element.innerHTML = '';
        
        let div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_name')
        div.innerText = this._exercise;
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_weight')
        div.innerText = this.exerciseElements['weight']; //TODO: Calculate proper weight
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_sets')
        div.innerText = this.exerciseElements['sets']; //TODO: Change rep scheme based on goals
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_reps')
        div.innerText = this.exerciseElements['reps']; //TODO: Change rep scheme based on goals
        element.appendChild(div);
    }


}

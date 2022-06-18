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

    render(element) {
        element.innerHTML = '';
        let div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_name')
        div.innerText = this._exercise;
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_weight')
        div.innerText = "45 lbs"; //TODO: Calculate proper weight
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_sets')
        div.innerText = "3 Sets"; //TODO: Change rep scheme based on goals
        element.appendChild(div);

        div = document.createElement('div');
        div.classList.add('exercise-element');
        div.setAttribute('id', 'exercise_reps')
        div.innerText = "5 Reps"; //TODO: Change rep scheme based on goals
        element.appendChild(div);
    }


}

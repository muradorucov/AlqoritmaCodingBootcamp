class Person {
    constructor(surname, name, age, gender) {
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const personOne = new Person('Orujov', 'Murad', 21, 'Male');
const personTwo = new Person('Əliyev', 'Fariz', 21, 'Female');
const personThree = new Person('Mamedov', 'Rashad', 20, 'Male');
console.log(personOne, personTwo, personThree);
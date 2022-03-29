let numbers = [1, 3, 4, 5, 7];
const persons = [...numbers];
for (let i = 0; i < persons.length; i++) {
    persons[i] = persons[i] * 2
}
console.log(persons);
console.log(numbers);
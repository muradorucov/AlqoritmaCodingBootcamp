class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    celebrateBirthday() {
        this.age++;
    }
}
const user1 = new Person('Murad', 21);
user1.celebrateBirthday();
console.log(user1)
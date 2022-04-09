class Person {
    constructor(suranme, name, age, gender) {
        this.suranme = suranme;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Admin extends Person {
    constructor(suranme, name, age, gender, role, id) {
        super(suranme, name, age, gender);
        this.role = role;
        this.id = id;
    }
}
class Player extends Person {
    constructor(suranme, name, age, gender, level) {
        super(suranme, name, age, gender);
        this.level = level;
    }
}
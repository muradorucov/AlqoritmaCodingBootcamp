class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    reanme(newName) {
        this.name = newName;
    }
}

class Admin extends User {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
}
const admin1 = new Admin('Muard', 22, 1);
console.log(admin1);
admin1.reanme('Qulu');
console.log(admin1);


class Recruit extends User {
    constructor(name, age) {
        super(name, age);
    }
    askHelp() {
        console.log('Need help!');
    }
}
const recruit1 = new Recruit('Rashad', 21, 4);
console.log(recruit1);
recruit1.reanme('Fariz');
console.log(recruit1)
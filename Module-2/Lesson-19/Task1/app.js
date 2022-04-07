const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 37,
    department: 'management',
    setAge(newAge) {
        this.age = newAge;
    },
    getYearsBeforeRetirement() {
        console.log(`Pensiyaya qədər qalan yaş - ${63 - this.age}`);
    }
};

user.setAge(22);
user.getYearsBeforeRetirement();
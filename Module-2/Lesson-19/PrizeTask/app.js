const calculator = {
    memory: 0,
    addition(a, b) {
        add = a + b;
        console.log(add);
    },
    emission(a, b) {
        add = a - b;
        console.log(a - b);
    },
    multiplication(a, b) {
        add = a * b
        console.log(a * b);
    },
    division(a, b) {
        add = a / b;
        console.log(a / b);
    },
    memoryInWrite() {
        this.memory = add;
    },
    memorytoAdd() {
        this.memory += add;
    },
    memoryShow() {
        console.log(this.memory);
    },
    memoryDelete() {
        this.memory = 0;
    }
}
calculator.addition(5, 6);
calculator.emission(10, 2);
calculator.multiplication(2, 5);
calculator.division(20, 4);
calculator.memoryInWrite();
calculator.memorytoAdd();
calculator.memoryDelete();
calculator.memoryShow();
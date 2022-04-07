const calculator = {
    storage: [],
    add(a, b) {
        item = a + b;
        this.storage.push(item);
    },
    emission(a, b) {
        item = a - b
        this.storage.push(item);
    },
    multiplication(a, b) {
        item = a * b
        this.storage.push(item);
    },
    division(a, b) {
        item = a / b
        this.storage.push(item);
    }
}
calculator.add(5, 6);
calculator.multiplication(4, 3);
console.log(calculator.storage)
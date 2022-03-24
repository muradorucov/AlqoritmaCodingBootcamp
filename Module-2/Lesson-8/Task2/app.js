function calc(a, b, c) {
    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return 'Error!';
    }
}

console.log(calc(4, 9, '+'));
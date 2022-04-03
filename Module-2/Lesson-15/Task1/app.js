const numbers = [1, 4, -5, 0, -3, -4, 2];

function printNegative(item) {
    if (item < 0) {
        console.log(item)
    }
}
numbers.forEach(printNegative);
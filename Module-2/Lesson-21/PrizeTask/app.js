function convertToDec(numbers) {
    let j = 0;
    let a = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
        j += numbers[a] * Math.pow(2, i);
        a++;
    }
    console.log(j);
    console.log(numbers.length)
}
convertToDec([0, 1, 0, 0, 1, 1, 0, 1, 1, 0]);
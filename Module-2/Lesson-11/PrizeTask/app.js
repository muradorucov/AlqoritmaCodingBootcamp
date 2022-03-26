const num = parseInt(prompt('Enter a positive num: '));
let n1 = 0,
    n2 = 1,
    nextNum;

if (num > 0 && num / 1 == num) {
    console.log(n1);
    console.log(n2);
    nextNum = n1 + n2;
    while (nextNum <= num) {
        console.log(nextNum);
        n1 = n2;
        n2 = nextNum;
        nextNum = n1 + n2;
    }
} else {
    console.log('Yanlış dəyər daxil edilib!')
}
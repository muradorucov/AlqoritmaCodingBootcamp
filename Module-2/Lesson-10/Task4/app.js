let n = 10;
let sum = 0;
while (n < 100) {
    if (n % 2 != 0) {
        sum += n;
        // console.log(n);
    }
    n++;
}
console.log(sum);
let num = Number(prompt('Ədədi daxil edin!'));
let a = 99;
let sum = 0;
if (num > 0 && num < 1000) {
    while (a < 999) {
        a++;
        if (a % num == 0) {
            sum += a;
        }
    }
    console.log(sum);
}
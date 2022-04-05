const numbers = [4, 3, 5, 6, 7, 8, 9, 1, 11];
let a = 0;
let b = 0;

function countEvensAndOdds(item) {
    if (item % 2 == 0) {
        a++;
    } else {
        b++;
    }
}
numbers.forEach(countEvensAndOdds);
console.log(`Massivdə ${a} cüt və ${b} tək ədəd var`);
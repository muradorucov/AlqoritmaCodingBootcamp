function tripleNumbers(a, b, c) {
    if (a > b && a > c && (c > b || b > c)) {
        console.log(a);
    } else if (b > a && b > c && (a > c || c > a)) {
        console.log(b);
    } else if (c > a && c > b && (a > b || b > a)) {
        console.log(c);
    } else {
        console.log('Iki və ya üç ədəd eynidir!');
    }
}
tripleNumbers(9, 5, 7);
tripleNumbers(4, 1, 5);
tripleNumbers(3, 5, 6);
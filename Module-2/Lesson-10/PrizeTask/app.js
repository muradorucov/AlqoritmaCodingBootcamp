let beginNumber = Number(prompt('Zehmet olmasa tam ədəi daxil edin:'));

for (let i = beginNumber; i > 0; i--) {
    if (i == 2) {
        console.log(2);
    } else if (i % 2 != 0) {
        let temp = 2;
        for (let j = 2; j < i; j++) {
            if (i % j != 0) {
                temp++;
                if (temp == i) {
                    console.log(i);
                }
            }

        }
    }
}

// if (beginNumber > 0) {
//     while (beginNumber >= 0) {
//         let c = 0;
//         let j = 1;
//         while (j <= beginNumber) {
//             if (beginNumber % j == 0) {
//                 c++;
//             }
//             j++;
//         }
//         if (c == 2) {
//             console.log(beginNumber);
//         }
//         beginNumber--;
//     }
// } else {

// }
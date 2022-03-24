function isLucky(number) {
    let numStr = String(number);
    if ((Number(numStr[0]) + Number(numStr[1]) + Number(numStr[2])) == (Number(numStr[3]) + Number(numStr[4]) + Number(numStr[5]))) {
        return true;
    } else {
        return false;
    }
}

console.log(isLucky(234801));
function isvalidnumber(phoneNumber) {
    if (phoneNumber.length == 11 && phoneNumber[0] == '+' && phoneNumber[1] == '7') {
        return true;
    } else {
        return false;
    }
}
console.log(isvalidnumber('+7234567892'));
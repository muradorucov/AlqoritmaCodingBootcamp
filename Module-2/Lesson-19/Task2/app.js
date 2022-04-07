const cilent = {
    fullName: 'Murad Orucov',
    creditLimit: 1500,
    balans: 5000,
    precentOfMinPayment: 15,
    getBalance() {

    },
    getMinPaymant() {

    },
    withdraw(dleteBalans) {
        this.balans = this.balans - dleteBalans;
    },
    refill(addToBalans) {
        this.balans = this.balans + addToBalans;
    }
}
cilent.withdraw(1500);
cilent.refill(1);
console.log(cilent)
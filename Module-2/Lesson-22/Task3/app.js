class Transaction {
    constructor(fromClient, toclient, amount) {
        this.fromClient = fromClient;
        this.toclient = toclient;
        this.amount = amount;
        this.commission = 5;
    }
    calculateCommission() {
        return (this.amount * 5) / 100;
    }
}
const transaction = new Transaction('Christian', 'Daniel', 1000);
console.log(transaction.calculateCommission());
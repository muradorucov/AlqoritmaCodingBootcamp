let debt;
const client = {
    fullName: 'Murad Orucov',
    creditLimit: 500,
    balans: 1000,
    precentOfMinPayment: 10,
    refill(addToBalans) {
        this.balans = this.balans + addToBalans;
    },
    withdraw(deleteBalans) {
        if (this.balans >= deleteBalans) {
            this.balans = this.balans - deleteBalans;
        } else if (this.balans < deleteBalans) {
            if (deleteBalans <= this.balans + this.creditLimit) {
                lend = (this.balans + this.creditLimit) - deleteBalans;
                this.balans = 0 - (this.creditLimit - lend);

                console.log(`Kreditdən istifadə olununan pul ${this.creditLimit - lend}, Qalan kredit ${this.creditLimit -(this.creditLimit - lend) }`);
            } else {
                console.log(`Bu məbləği çəkmək mümkün deyil. Kreditle birge ${this.balans + this.creditLimit} manat pul çəkə bilərsiniz.`);
            }
        }

    },
    getBalance() {
        if (this.balans > 0) {
            console.log(`Balansınız ${this.balans}`);
        } else if (this.balans < 0) {
            console.log(`Borcunuz ${this.balans}`);
        } else {
            console.log(`Balans 0-a bərabərdir.`);
        }
    },
    getMinPaymant() {
        if (this.balans < 0) {
            debt = this.balans + this.balans * this.precentOfMinPayment
            console.log("Minimum ödənişiniz " + debt)
        } else if (this.balans > 0) {
            console.log("Sizin borcunuz yoxdur");
        }
    }
}

client.refill(2000);
client.withdraw(3059);
client.getBalance();
client.getMinPaymant();
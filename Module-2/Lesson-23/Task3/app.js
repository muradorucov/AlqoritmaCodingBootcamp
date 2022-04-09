class SimpleCalc {
    constructor(num) {
        this.num = num;
    }
    plus(number) {
        this.num = this.num + number;
    }
    minus(number) {
        this.num = this.num - number;
    }
    mult(number) {
        this.num = this.num * number;
    }
    divide(number) {
        this.num = this.num / number;
    }
    toString() {
        return String(this.num);
    }
}

const simpleCalc = new SimpleCalc(8);
simpleCalc.plus(2);
simpleCalc.minus(7);
simpleCalc.mult(10);
simpleCalc.divide(5);
console.log(simpleCalc.toString()); // 15


class ProgrammerCalc extends SimpleCalc {
    constructor(num) {
        super(num)
    }
    toString() {
        let arr = [];
        while (this.num > 0) {
            let elemet = this.num - (Math.floor(this.num / 2)) * 2
            arr.push(elemet);
            this.num = Math.floor(this.num / 2)
            var arrNumber = arr.join('');
        }
        return String(arrNumber);
    }
}

const programmerCalc = new ProgrammerCalc(8);
programmerCalc.plus(2);
programmerCalc.minus(7);
programmerCalc.mult(10);
programmerCalc.divide(5);
console.log(programmerCalc.toString()); // 1111
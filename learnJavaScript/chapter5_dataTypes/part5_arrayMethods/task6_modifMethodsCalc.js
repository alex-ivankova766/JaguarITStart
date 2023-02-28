"use strict";

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(expression) {
        let expSplit = expression.split(" ");
        let a = +expSplit[0];
        let sign = expSplit[1];
        let b = +expSplit[2];

        if (!this.methods[sign] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return this.methods[sign](a, b);        
    }

    this.addMethod = function(sign, func) {
        this.methods[sign] = func;
    }
}

let calc = new Calculator();

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
"use strict";

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const sum = calcSalariesSum(salaries);
console.log(sum);

function calcSalariesSum(objSalaries) {
    let salariesSum = 0;
    for (let salary in objSalaries) {
        salariesSum += objSalaries[salary];
    }

    return salariesSum;
}

"use strict";

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    let sumSalaries = 0;
    for (let salary of Object.values(salaries)) {
        sumSalaries += +salary;
    }

    return sumSalaries;
}

/*Поскольку в задаче было конкретно прописано:
 решить через for, вариант с reduce я отбросила:

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
} */
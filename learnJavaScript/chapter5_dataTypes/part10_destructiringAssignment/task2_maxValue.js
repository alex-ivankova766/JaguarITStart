"use strict";

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let topSalary = 0;
    let topEmployee = null;

    for(let [name, salary] of Object.entries(salaries)) {
        [topSalary, topEmployee] = (topSalary < salary) ?
        [salary, name] : [topSalary, topEmployee];
    }

    return topEmployee
}
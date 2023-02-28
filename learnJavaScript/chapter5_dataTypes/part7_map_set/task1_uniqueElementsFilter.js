"use strict";

function unique(arr) {
    const arraySet = new Set(arr);
    let resultArray = [];
    for (let elem of arraySet) {
        resultArray.push(elem);
    }
    return resultArray;
} 

// ( запомнить: Array.from() )
// т.е. вместо строк 3,4,5,6,7 можно было
//return(Array.from(new Set(arr)));

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );
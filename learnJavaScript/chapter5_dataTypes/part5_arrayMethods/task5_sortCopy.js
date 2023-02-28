"use strict";

function copySorted(names) {
    return names.slice().sort((a, b) => a.localeCompare(b)); 
    // concat() тоже отрабатывает
}

let arrToSort = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrToSort);

console.log(sorted);
console.log(arrToSort);
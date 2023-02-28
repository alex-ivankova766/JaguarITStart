"use strict";

function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
}

let ivan = { name: "Вася", age: 25 };
let ilya = { name: "Петя", age: 30 };
let olga = { name: "Маша", age: 28 };

let people = [ ivan, ilya, olga ];

sortByAge(people);

// теперь: [ivan, olga, ilya]
console.log(people[0].name); // Вася
console.log(people[1].name); // Маша
console.log(people[2].name); // Петя
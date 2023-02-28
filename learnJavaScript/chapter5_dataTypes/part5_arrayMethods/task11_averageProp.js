"use strict";

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let denis = { name: "Вася", age: 25 };
let anton = { name: "Петя", age: 30 };
let irina = { name: "Маша", age: 29 };

let ageList = [ denis, anton, irina ];

console.log( getAverageAge(ageList) );
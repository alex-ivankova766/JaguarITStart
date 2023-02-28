"use strict";

let vasiliy = { name: "Вася", surname: "Пупкин", id: 1 };
let petr = { name: "Петя", surname: "Иванов", id: 2 };
let mariya = { name: "Маша", surname: "Петрова", id: 3 };

let usersData = [ vasiliy, petr, mariya ];

function changeToFullname(object) {
    object.fullName = object.name + " " + object.surname;
    delete object["name"];
    delete object["surname"];
    return object
}

/* Можно было:

(запомнить: без круглых скобок 
    фигурные не воспримутся как начало тела объекта, 
    а как начало тела функции)

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
})); */

let usersMapped = usersData.map(item => changeToFullname(item));

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
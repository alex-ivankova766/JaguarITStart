"use strict";

let password;
let login = prompt("Кто там?", "");

if (login == "") {
    alert("Отменено");
} else if (login == "Админ") {
    password = prompt("Пароль?", "");
} else {
    alert("Я вас не знаю");
}

if (password == "Я главный!") {
    alert("Здравствуйте!");
} else if (password == "") {
    alert("Отменено");
} else {
    alert("Неверный пароль");
}
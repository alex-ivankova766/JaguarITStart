"use strict";

let rightAnswer = "ECMAScript";
let answer = prompt("Какое «официальное» название JavaScript?", "");
if (answer == rightAnswer) {
    alert("Верно");
} else {
    alert(`Не знаете? ${rightAnswer}`);
}
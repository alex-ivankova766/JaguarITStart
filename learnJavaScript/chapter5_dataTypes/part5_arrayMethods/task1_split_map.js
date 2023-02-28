"use strict";

function camelize(string) {
    string = string.split("-");
    string = string.map((word, index) => 
    index == 0 ? word : 
    word[0].toUpperCase() + word.slice(1));
    string = string.join("");

    return string;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
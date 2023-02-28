"use strict";

alert(ucFirst("вася"));

function ucFirst(string) {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1);
}
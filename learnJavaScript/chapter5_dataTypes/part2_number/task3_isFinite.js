"use strict";

function readNumber() {
    let number;
    do {
        number = prompt("Введите число", 0);
    } while ( !isFinite(number) );
    if (number === null || number === "") {
        return null;
    }
    return +number;
}

alert(`Число: ${readNumber()}`);
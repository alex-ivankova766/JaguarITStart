"use strict";

function sumInput() {
    let sumNumbers = 0;
    gettingInput = true;
    do {
        let value = prompt("Введите число: ", "");
        if (value == +value && value != "") {
            sumNumbers += +value;
        } else gettingInput = false
    } while (gettingInput == true)
    return sumNumbers;
}

alert( sumInput() );
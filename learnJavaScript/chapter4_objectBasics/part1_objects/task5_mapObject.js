"use strict";

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof object[prop] == 'number') {
            object[prop] *= 2;
        }
    }
}
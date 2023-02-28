"use strict";

let person = {
    name: "Василий Иванович",
    age: 35
  };

person = JSON.stringify(person);

console.log(person);

let personCopy = JSON.parse(person);

console.log(typeof person);
console.log(typeof personCopy);

"use strict";

function groupById(arr) {
    return arr.reduce((object, value) => {
        object[value.id] = value;
        return object;
    }, {})
}

let usersInfo = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(usersInfo);

console.log(usersById['john']['name']);
console.log(usersById['ann']['name']);
console.log(usersById['pete']['name']);
"use strict";

let user = {
    name: 'John',
    age: 30,
  };
  
  alert( count(user) ); // 2

function count(object) {
    return Object.values(object).length;
}
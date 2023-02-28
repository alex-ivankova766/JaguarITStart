"use strict";

let human = {
    userName: "John",
    years: 30
  };

let {userName, years: age, isAdmin = false} = human;


console.log( userName ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
"use strict";

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

/* 4, тк shoppingCart скопировпн из fruits, а значит они ссылаются
* на один и тот же объект; */
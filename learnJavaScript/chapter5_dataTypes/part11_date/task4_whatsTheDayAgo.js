"use strict";

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);

    return dateCopy.getDate();
}

let dateAgo = new Date(2015, 0, 2);

console.log( getDateAgo(dateAgo, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(dateAgo, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(dateAgo, 365) ); // 2, (2 Jan 2014)


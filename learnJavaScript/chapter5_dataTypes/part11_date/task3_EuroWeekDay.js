"use strict";

function getLocalDay(date) {
    let weekDay = date.getDay();
    return (weekDay == 0) ? 7 : weekDay;
    
}

let euroDate = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(euroDate) );       // вторник, нужно показать 2


"use strict";

function getWeekDay(date) {
    let weekDay = date.getDay();
    
    switch (weekDay) {
        case 0 :
            return "ВС";
            break;
        case 1 :
            return "ПН";
            break;
        case 2 :
            return "ВТ";
            break;
        case 3 :
            return "СР";
            break;
        case 4 :
            return "ЧТ";
            break;
        case 5 :
            return "ПТ";
            break;
        case 6 :
            return "СБ";
            break;
    }
}

let thisDate = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(thisDate) );        // нужно вывести "ВТ"
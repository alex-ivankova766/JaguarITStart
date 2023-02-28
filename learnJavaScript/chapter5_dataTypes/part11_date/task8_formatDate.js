"use strict";

function formatDate(date) {
    let now = new Date();
    
    let miliSecondsRange = Math.round((now - date) / 1000);

    if (miliSecondsRange < 1) {
        return "прямо сейчас";
    } else if (miliSecondsRange < 60) {
        return `${miliSecondsRange} сек. назад`
    } else if (miliSecondsRange < 3600) {
        return `${Math.round(miliSecondsRange / 60)} мин. назад`
    } else {
        const year = date.getFullYear() % 100;
        const month = (date.getMonth() + 1 < 10) ? 
        `0${date.getMonth() + 1}` : (date.getMonth() + 1);
        const day = (date.getDate() < 10) ?
        `0${date.getDate()}` : date.getDate();
        const hours = (date.getHours() < 10) ? 
        `0${date.getHours()}` : date.getHours();
        const minutes = (date.getMinutes() < 10) ? 
        `0${date.getMinutes()}` : date.getMinutes();
        return `${day}.${month}.${year} ${hours}:${minutes}`
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
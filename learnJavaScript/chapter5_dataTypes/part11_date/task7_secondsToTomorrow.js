"use strict";

function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrowMidnight = new Date();
    tomorrowMidnight.setDate(now.getDate() + 1);
    tomorrowMidnight.setHours(0, 0, 0, 0);
    
    return Math.round((tomorrowMidnight - now) / 1000);
}

console.log(getSecondsToTomorrow());
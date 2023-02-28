"use strict";

function getSecondsToday() {
    let now = Date.now();

    let midnight = new Date();
    midnight.setHours(0, 0, 0, 0);

    return Math.round((now - midnight) / 1000);
}

console.log(getSecondsToday());
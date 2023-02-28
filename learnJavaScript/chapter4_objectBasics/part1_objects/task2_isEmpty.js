"use strict";

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(checkingObject) {
    for (key in checkingObject) {
        return false;
    }

    return true;
}
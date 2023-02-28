"use strict";

function truncate(string, maxlength) {
    return (string.length > maxlength) ?
    string.slice(0, (maxlength - 1)) + "…" : 
    string;
}
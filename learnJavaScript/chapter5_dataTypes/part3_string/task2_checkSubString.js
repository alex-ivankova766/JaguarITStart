"use strict";

function checkSpam(string) {
    const lowerString = string.toLowerCase();
    
    return lowerString.includes("xxx") || 
    lowerString.includes("viagra");
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
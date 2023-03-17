function inBetween(a, b) {
    return function(value) {
        return value > a && value < b;
    }
}

function inArray(array) {
    return function(value) {
        return array.includes(value);
    }
}
function stringSum(number1, number2) {

    let negative = false;
    if (number1[0] == "-" && number2[0] != "-") {
        return stringDifference(number2, number1.slice(1));
    } else if (number2[0] == "-" && number1[0] != "-") {
        return stringDifference(number1, number2.slice(1));
    } else if (number2[0] == "-" && number1[0] == "-") {
        negative = true;
    }
 
    let result;
    
    number1 = number1.split("").reverse().map(num => +num);
    number2 = number2.split("").reverse().map(num => +num);

    equalizePositions(number1, number2);

    if ((number1.at(-1) + number2.at(-1)) > 9) {
        number1.push(0);
        number2.push(0);
    }
    
    result = [];

    for (let i = 0; i < number1.length; i++) {
        if (result[i]) {
            result[i] += number1[i] + number2[i];
        } else {
            result[i] = number1[i] + number2[i];
        }
        checkPositions(result, i);
    }

    return (negative ? "-" : "") + result.reverse().join("");

}

function stringDifference(number1, number2) {
    
    let negative = false;
    if (number1[0] == "-" && number2[0] != "-") {
        return "-" + stringSum(number1.slice(1), number2);
    } else if (number2[0] == "-" && number1[0] != "-") {
        return stringSum(number1, number2.slice(1));
    } else if (number2[0] == "-" && number1[0] == "-") {
        return stringDifference(number2.slice(1), number1.slice(1));
    }

    let result;
    
    number1 = number1.split("").reverse().map(num => +num);
    number2 = number2.split("").reverse().map(num => +num);

    equalizePositions(number1, number2);

    for (let index = 0; index < number1.length; index ++){
        if ((number1.at(index) - number2.at(index)) < 0) {
            [number1, number2] = [number2, number1];
            negative = !negative;
            break;
        }
    }
    
    result = [];

    for (let i = 0; i < number1.length; i++) {
        if (result[i]) {
            result[i] -= number1[i] - number2[i];
        } else {
            result[i] = number1[i] - number2[i];
        }    
    }

    checkPositionsSumDiff(result);
    result = result.reverse();

    if (result[0] == 0) {
        while (result[0] == 0) {
            result = result.slice(1);
        } 
    }

    return (negative ? "-" : "") + result.join("");
}

function stringCompose(number1, number2) {

    if (number1 == "0" || number2 == "0") return "0";

    let negativeCounter = 0;
    if (number1[0] == "-") {
        negativeCounter += 1;
        number1 = number1.slice(1);
    }
    if (number2[0] == "-") {
        negativeCounter += 1;
        number2 = number2.slice(1);
    }
    let negative = (negativeCounter % 2 == 1) ? true : false;

    let result;
    
    number1 = number1.split("").reverse().map(num => +num);
    number2 = number2.split("").reverse().map(num => +num);
    
    result = [];
    let numbers = [number1, number2].sort((a, b) => a.length - b.length);
    [number1, number2] = numbers;

    for (let i = 0; i < number2.length; i++) {
        for (let j = 0; j < number1.length; j++) {
            if (result[i + j]) {
                result[i + j] += number1[j] * number2[i];
            } else {
                result[i + j] = number1[j] * number2[i];
            }
            checkPositions(result, (i + j));
        }
    }

    return (negative ? "-" : "") + result.reverse().join("");
}

function stringDivision(number1, number2) {

    if (number1 == "0") return "0";
    if (number2 == "0") return "Error: zero division";

    let negativeCounter = 0;
    if (number1[0] == "-") {
        negativeCounter += 1;
        number1 = number1.slice(1);
    }
    if (number2[0] == "-") {
        negativeCounter += 1;
        number2 = number2.slice(1);
    }
    let negative = (negativeCounter % 2 == 1) ? true : false;

    let quotient = 0;
    
    while (stringDifference(number1, number2) >= 0) {
        number1 = stringDifference(number1, number2);
        quotient += 1;
    }

    let remainder = number1;

    let result = (negative ? "-" : "") + ((remainder != 0) ? `${quotient} целых, ${remainder} / ${number2}.` : quotient);

    return result;
}

function checkPositions(numbers, index) {
    if (numbers[index] > 9) {
        let high = +String(numbers[index])[0];
        let low = +String(numbers[index])[1];
        numbers[index] = low;
        numbers[index + 1] = high;
    }   
}

function checkPositionsSumDiff(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 9) {
            let high = +String(numbers[i])[0];
            let low = +String(numbers[i])[1];
            numbers[i] = low;
            numbers[i + 1] = high;
        }
        if (numbers[i] < 0) {
            numbers[i] += 10;
            numbers[i + 1] -= 1;
        }
    }
}

function equalizePositions(number1, number2) {
    if (number1.length < number2.length) {
        for ( let i = number1.length; i < number2.length; i++) {
            number1[i] = 0;
        }
    } else if (number1.length > number2.length) {
        for ( let i = number2.length; i < number1.length; i++) {
            number2[i] = 0;
        }
    }
}

console.log(stringSum("1590", "599"));
console.log(stringSum("999999", "9999999"));
console.log(stringSum("1", "-999"));
console.log(stringSum("999", "1"));
console.log(stringSum("999", "-1"));
console.log("\n");

console.log(stringDifference("1590", "599"));
console.log(stringDifference("-1590", "599"));
console.log(stringDifference("1590", "1599"));
console.log(stringDifference("-1590", "-599"));
console.log(stringDifference("123", "223"));
console.log(stringDifference("999", "-1"));
console.log("\n");


console.log(stringCompose("15", "2"));
console.log(stringCompose("-600", "200"));
console.log(stringCompose("-1000", "-9"));
console.log(stringCompose("-600", "0"));
console.log(stringCompose("0", "19"));
console.log("\n");


console.log(stringDivision("-15", "-200"));
console.log(stringDivision("600", "20"));
console.log(stringDivision("-1000", "9"));
console.log(stringDivision("600", "0"));
console.log(stringDivision("0", "9"));
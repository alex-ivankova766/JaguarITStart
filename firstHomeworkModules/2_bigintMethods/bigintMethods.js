/*На данном этапе обучения удалось реализовать 
функции сложения, вычитания, произведения и деления
для положительных целых чисел. Числа должны быть
представлены в виде строк.
Результат деления представляется в виде Частного и остатка.*/


function stringSum(number1, number2) {
    if (number1[0] == "-" || number2[0] == "-") {
        return `На данный момент функция разработана только для целых положительных чисел. 
Спасибо за понимание.`;
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
        checkPositions(result);
    }

    return result.reverse().join("");

}

function stringDifference(number1, number2) {
    let negative = false;
    if (number1[0] == "-" || number2[0] == "-") {
        return `На данный момент функция разработана только для целых положительных чисел. 
Спасибо за понимание.`;
    }
    let result;
    
    number1 = number1.split("").reverse().map(num => +num);
    number2 = number2.split("").reverse().map(num => +num);

    equalizePositions(number1, number2);

    if ((number1.at(-1) - number2.at(-1)) < 0) {
        [number1, number2] = [number2, number1];
        negative = true;
    }
    
    result = [];

    for (let i = 0; i < number1.length; i++) {
        if (result[i]) {
            result[i] -= number1[i] - number2[i];
        } else {
            result[i] = number1[i] - number2[i];
        }    
    }

    checkPositions(result);
    result = result.reverse();

    if (result[0] == 0) {
        result = result.slice(1);
    }

    if (negative) {
        result = "-" + result.join("");
    } else {
        result = result.join("");
    }

    return result;
}

function stringCompose(number1, number2) {
    if (number1[0] == "-" || number2[0] == "-") {
        return `На данный момент функция разработана только для целых положительных чисел. 
Спасибо за понимание.`;
    }

    let result;
    
    number1 = number1.split("").reverse().map(num => +num);
    number2 = number2.split("").reverse().map(num => +num);
    
    result = [];
    let numbers = [number1, number2].sort((a, b) => a.length - b.length);
    [number1, number2] = numbers;

    for (let i = 0; i < number2.length; i++) {
        for (let j = 0; j < number1.length; j++) {
            if (result[i]) {
                result[i] += number1[j] * number2[i];
            } else {
                result[i] = number1[j] * number2[i];
            }
            checkPositions(result);
        }
        
    }

    return result.reverse().join("");

}

function stringDivision(number1, number2) {
    if (number1[0] == "-" || number2[0] == "-") {
        return `На данный момент функция разработана только для целых положительных чисел. 
Спасибо за понимание.`;
    }

    let quotient = 0;
    
    while (stringDifference(number1, number2) >= 0) {
        number1 = stringDifference(number1, number2);
        quotient += 1;
    }

    let remainder = number1;

    let result = (remainder != 0) ? `${quotient} целых, ${remainder} / ${number2}.` : quotient;

    return result;

}

function checkPositions(numbers) {
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
console.log(stringSum("999", "1"));
console.log(stringSum("999", "-1"));

console.log(stringDifference("1590", "599"));
console.log(stringDifference("123", "223"));
console.log(stringDifference("999", "-1"));

console.log(stringCompose("15", "2"));
console.log(stringCompose("600", "20"));
console.log(stringCompose("1000", "9"));

console.log(stringDivision("15", "200"));
console.log(stringDivision("600", "20"));
console.log(stringDivision("1000", "9"));
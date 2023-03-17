function cycleSumTo(n) {
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        sum += i;
    }
    return sum;
}

function recursionSumTo(n) {
    return (n == 1) ? n : n + recursionSumTo(n - 1);
}

function GaussSumTo(n) {
    return n * (n + 1) / 2;
}

console.log(cycleSumTo(10));
console.log(recursionSumTo(10));
console.log(GaussSumTo(10));

/* P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

Самый быстрый вариант - по формуле Гаусса, самый медленный через рекурсию.
Тк по формуле всегда только 3 арифметических действия,
тк у цикла нет доп энерг затрат на вложенность.

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


Максимальная глубина рекурсии ограничена движком JavaScript. 
Точно можно рассчитывать на 10000 вложенных вызовов, 
некоторые интерпретаторы допускают и больше, 
но для большинства из них 100000 вызовов – за пределами возможностей. 
*/


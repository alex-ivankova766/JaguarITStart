// "use strict";

function pow(x, n) {
  if (n % 1 !== 0 || n < 1) {
    return 'Степенью в данной задаче может быть только натуральное число';
  }
  return x ** n;
}

const x = prompt('Введите число', 1);
const n = prompt('Введите степень', '');
alert(`${x} ** ${n} = ${pow(x, n)}`);

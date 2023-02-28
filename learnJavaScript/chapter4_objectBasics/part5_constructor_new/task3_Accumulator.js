"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Новое число?", 0)
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(`Итого: ${accumulator.value}`);
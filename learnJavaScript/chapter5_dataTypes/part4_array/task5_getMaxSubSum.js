"use strict";

function getMaxSubSum(numbers) {
    let maxSum = 0;
    let accumSum = 0;

    for (let number of numbers) { // (запомнить: of of of of of of)
        accumSum += number;
        maxSum = (maxSum >= accumSum) ? maxSum : accumSum; // (запомнить: Math.max(maxSum, accumSum);)
        if (accumSum < 0) accumSum = 0;
    }

    return maxSum;
}
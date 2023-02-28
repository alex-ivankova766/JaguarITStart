import {isLetter} from "./correctSpaces.js";

String.prototype.removePuncMark = function () {
    const lastIndex = this.length - 1;
    const lastChar = this[lastIndex];

    if (!isLetter(lastChar)) {
        return this.slice(0, lastIndex);
    };
    }

String.prototype.uniqueWordCounter = function () {
    const counter = {};
    let answer = "";
    const words = this.toLowerCase().split(" "); 

    for (let word of words) {
        word.removePuncMark();

        if (!(word in counter)) {
            counter[word] = 1;
        } else {
            counter[word] += 1;
        }
    }
    for (let key in counter) {
        if (counter[key] == 1 || counter[key] > 4) {
            answer += `${key} ${counter[key]} раз\n`
        } else {answer += `${key} ${counter[key]} раза\n`}
    }
    return answer;
};


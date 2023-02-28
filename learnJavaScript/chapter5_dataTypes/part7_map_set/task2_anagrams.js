"use strict";

function aclean(arr) {

    let wordAnalyzer = {}; // ключи - отсортированный набор символов,
    // значения - все свойства слова:
    // индекс, слово, количество
    let uniqueWords = []; // результат

    for (let i = 0; i < arr.length; i++) {
        let chars = arr[i].toLowerCase().split("").sort().join("");

        if (!(chars in wordAnalyzer)) {
            let wordProps = {};
            wordProps.index = i;
            wordProps.word = arr[i];
            wordProps.count = 1;
            wordAnalyzer[chars] = wordProps;
        } else {
            wordAnalyzer[chars]["count"] += 1;
        }
    }

    for (let key in wordAnalyzer) {
        if (wordAnalyzer[key]["count"] >= 2) {
            uniqueWords.push(wordAnalyzer[key]["word"]);
        }
    }

    return uniqueWords;
}

let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(words));

/* В ответах решение проще, пробовала делать с перезаписью,
не учла, что можно использовать return Object.values(obj);
и из-за этого ошиблась в копировании значений в массив;
Своё решение оставила, тк всё равно нравится, его можно
при необходимости использовать для более широкого анализа;
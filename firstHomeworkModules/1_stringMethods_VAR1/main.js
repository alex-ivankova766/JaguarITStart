const MORESPACE = `Вот пример строки,в которой     используются знаки препинания.После  знаков должны стоять пробелы , а   перед знаками их быть не должно .       Если есть лишние подряд идущие     пробелы, они должны быть устранены.`;
const DIFFERENTCASE = ["fggHHHfg", "FFFgggg", "111111", "###", "-fgrgrg", "HHHHH"];
const SENTENCE = "Текст, в котором слово текст несколько раз встречается и слово тоже";

function go() {
    return new Promise((resolve) => {
        setTimeout(() => resolve, 1000)})
        .then(console.log(MORESPACE.correctSpaces()))
        .then(console.log("Пробелы    в середине и в конце строки     ".correctSpaces()))
        .then(capitalize(DIFFERENTCASE))
        .then(console.log(SENTENCE.wordCounter()))
        .then(console.log(SENTENCE.uniqueWordCounter()));
    ;
}

function capitalize(words) {
    for (let word of words) {
        console.log(`${word} => ${word.capitalize()}`)
    }
}
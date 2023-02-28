const MORESPACE = `Вот пример строки,в которой     используются знаки препинания.После  знаков должны стоять пробелы , а   перед знаками их быть не должно .       Если есть лишние подряд идущие     пробелы, они должны быть устранены.`;
const DIFFERENTCASE = ["fggHHHfg", "FFFgggg", "111111", "###", "-fgrgrg", "HHHHH"];
const SENTENCE = "Текст, в котором слово текст несколько раз встречается и слово тоже";

console.log(MORESPACE.correctSpaces());
console.log("Пробелы    в середине и в конце строки     ".correctSpaces());

for (let word of DIFFERENTCASE) {
    console.log(`${word} => ${word.capitalize()}`)
}

console.log(SENTENCE.wordCounter());

console.log(SENTENCE.uniqueWordCounter());
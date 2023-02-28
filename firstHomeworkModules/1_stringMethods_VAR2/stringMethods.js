function capitalize(string) {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

function correctSpaces(string) {
    let sentence = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (isLetter(char)) {
            sentence += char;
            
        } else if (char == " ") {
            sentence += " ";
        } else {
            if (sentence[sentence.length - 1] == " ") {
                while (sentence[sentence.length - 1] == " ") {
                    sentence = sentence.slice(0, sentence.length - 1);
                }            
            }

            sentence += char + " ";
        }
    }  

    sentence = sentence.replace(/\s+/g, ' ').trim() 
    return sentence;
};

function isLetter(char) {
    const charCode = char.codePointAt(0);

    return (charCode > 64 && charCode < 91) || 
    (charCode > 96 && charCode < 123) || 
    (charCode > 1039 && charCode < 1104) || 
    charCode == 1105 || charCode == 1025;
}

function removePuncMark(string) {
    const lastIndex = string.length - 1;
    const lastChar = string[lastIndex];

    if (!isLetter(lastChar)) {
        return string.slice(0, lastIndex);
    };
    }

function uniqueWordCounter(string) {
    const counter = {};
    let answer = "";
    const words = string.toLowerCase().split(" "); 

    for (let word of words) {
        removePuncMark(word);

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

function wordCounter(string) {
    return string.split(" ").length;
};




const MORESPACE = `Вот пример строки,в которой     используются знаки препинания.После  знаков должны стоять пробелы , а   перед знаками их быть не должно .       Если есть лишние подряд идущие     пробелы, они должны быть устранены.`;
const DIFFERENTCASE = ["fggHHHfg", "FFFgggg", "111111", "###", "-fgrgrg", "HHHHH"];
const SENTENCE = "Текст, в котором слово текст несколько раз встречается и слово тоже";

console.log(correctSpaces(MORESPACE));
console.log(correctSpaces("Пробелы    в середине и в конце строки  .   "));

for (let word of DIFFERENTCASE) {
    console.log(`${word} => ${capitalize(word)}`)
}

console.log(wordCounter(SENTENCE));

console.log(uniqueWordCounter(SENTENCE));
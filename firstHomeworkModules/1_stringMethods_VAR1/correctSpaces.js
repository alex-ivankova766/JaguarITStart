String.prototype.correctSpaces = function () {
    let sentence = "";

    for (let i = 0; i < this.length; i++) {
        let char = this[i];

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

export function isLetter(char) {
    const charCode = char.codePointAt(0);

    return (charCode > 64 && charCode < 91) || 
    (charCode > 96 && charCode < 123) || 
    (charCode > 1039 && charCode < 1104) || 
    charCode == 1105 || charCode == 1025;
}
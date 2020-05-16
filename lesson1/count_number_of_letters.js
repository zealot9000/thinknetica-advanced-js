let userInput = prompt('Введите текст на английском').replace(/ /g,'');
let vowel_list = 'aeiouAEIOU';

let vowel = 0;
let consonant = 0;

for (let count = 0; count < userInput.length; count++) {
    let letter = userInput[count]
    if (letter.toLowerCase() === letter.toUpperCase()) { continue; }
    if (vowel_list.indexOf(letter) !== -1) {
        ++vowel
    } else {
        ++consonant
    }
};

alert(`Количество гласных: ${consonant}, согласных: ${vowel}`)

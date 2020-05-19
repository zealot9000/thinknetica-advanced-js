let userInput = prompt('Введите слово').split('');
let reverseResult = '';

for (let index = userInput.length - 1; index >= 0; --index) {
  reverseResult = reverseResult + userInput[index];
}

alert(`Инвертированное слово: ${reverseResult}`)

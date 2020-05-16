let userInput = prompt('Введите число');
let sum = 0;
let count = 0;

for (;userInput !== '' ;++count) {
    sum = sum + parseInt(userInput)
    alert(`Промежуточная сумма: ${sum}`)
    userInput = prompt('Введите число')
};

alert(`Итоговая сумма: ${sum}, Количество чисел: ${count}, Среднее арифметическое: ${sum / count}`);

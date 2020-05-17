let userInput = prompt('Введите дату в формате ММ/ЧЧ/ГГГГ');
let [month, day, year] = userInput.split('/');

if (month > 12 || day > 31 || year.length < 1) {
    alert('Ошибка формата ввода!');
} else {
    alert(`${day}.${month}.${year}`);
}
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const sumOfPositive = require('../../lesson3/sum_of_positive.js');

describe('#sumOfPositive()', function() {
    it('Смешанный массив', function() {
        let array = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
        let result = {count: 5, sum: 357};
        expect(sumOfPositive(array)).to.deep.equal(result);
    });

    it('Все числа положительные', function() {
        let array = [1, 2, 3];
        let result = {count: 3, sum: 6};
        expect(sumOfPositive(array)).to.deep.equal(result);
    });

    it('Пустой массив', function() {
        let array = [];
        let result = 'Array is empty'
        expect(function() { sumOfPositive(array) }).to.throw(result);
    });

    it('Массив сo строками', function() {
        let array = [1, 2, -3, 'a'];
        let result = 'Only integers are allowed in an argument'
        expect(function() { sumOfPositive(array) }).to.throw(result);
    });

    it('Массив из нулей', function() {
        let array = [0, 0, 0];
        let result = 'Reduce of empty array with no initial value'
        expect(function() { sumOfPositive(array) }).to.throw(result);
    });

    it('Функция без аргументов', function() {
        let result = 'Array is empty'
        expect(function() { sumOfPositive() }).to.throw(result);
    });
});

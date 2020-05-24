const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const wordStat = require('../../lesson3/word_stat.js');

describe('#wordStat()', function() {
    it('Корректный результат', function() {
        let string = 'Lorem ipsum dolor sit amet.'
        let result = [
                      { word: 'Lorem', sum: 511 },
                      { word: 'ipsum', sum: 558 },
                      { word: 'dolor', sum: 544 },
                      { word: 'sit', sum: 336 },
                      { word: 'amet.', sum: 469 }
                    ]
        expect(wordStat(string)).to.deep.equal(result);
    });

    it('Смешанный аргумент', function() {
        let string = 'Sha la la! ' + 1
        let result = [
                      { word: 'Sha', sum: 284 },
                      { word: 'la', sum: 205 },
                      { word: 'la!', sum: 238 },
                      { word: '1', sum: 49 }
                    ]
        expect(wordStat(string)).to.deep.equal(result);
    });

    it('Функция без аргументов', function() {
        let result = 'Text is empty'
        expect(function() { wordStat() }).to.throw(result);
    });

    it('Числа в аргументе', function() {
        let argument = 123
        let result = 'Only strings are allowed in an argument'
        expect(function() { wordStat(argument) }).to.throw(result);
    });
});

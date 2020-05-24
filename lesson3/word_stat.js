function wordStat (text = '') {
    if (!text)
        throw new Error('Text is empty');

    if (typeof text !== 'string')
        throw new Error('Only strings are allowed in an argument');

    let result = text.split(' ').map(function(word) {
        let sum = word.split('').reduce((codeSum, symbol) => codeSum + symbol.charCodeAt(), 0);
        return {word, sum};
    })

    return result;
}

module.exports = wordStat;

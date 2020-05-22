function wordStat (text = '') {
    if (!text)
        throw new Error('Text is empty');

    if (typeof text !== 'string')
        throw new Error('Only strings are allowed in an argument');

    let result = [];
    let words = text.split(' ');

    words.forEach((word) => {
        let charCodeSum = 0;

        word.split('').map(function(symbol) {
            charCodeSum += symbol.charCodeAt();
        })

        result[result.length] = {'word': word, 'sum': charCodeSum};
    })

    return result;
}

module.exports = wordStat;

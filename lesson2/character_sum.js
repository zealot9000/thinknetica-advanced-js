function characterSum (text) {
    if (!text)
        throw new Error('Text is empty');

    let result = [];
    let words = text.split(' ');

    words.forEach((word) => {
        let charCodeSum = 0;

        word.split('').map(function(symbol) {
            charCodeSum += symbol.charCodeAt();
        })

        result[result.length] = {'word': word, 'sum': charCodeSum};
    })

    console.log(result);
}

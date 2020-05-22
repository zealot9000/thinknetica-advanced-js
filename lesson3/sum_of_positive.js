function sumOfPositive (array = []) {
    if (array.length === 0)
        throw new Error('Array is empty');

    if (array.some(i => !Number.isInteger(i)))
        throw new Error('Only integers are allowed in an argument');

    let positiveValues = array.filter(element => element > 0);
    let count = positiveValues.length;
    let sum = positiveValues.reduce(function(codeSum, record) {
        return codeSum + record;
    })

    return {count, sum};
};

module.exports = sumOfPositive;

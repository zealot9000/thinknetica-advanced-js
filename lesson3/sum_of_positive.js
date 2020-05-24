function sumOfPositive (array = []) {
    if (array.some(i => !Number.isInteger(i)))
        throw new Error('Only integers are allowed in an argument');

    if (array.length === 0)
        throw new Error('Array is empty');

    let positiveValues = array.filter(element => element > 0);
    let count = positiveValues.length;
    let sum = positiveValues.reduce((codeSum, record) => codeSum + record);

    return {count, sum};
};

module.exports = sumOfPositive;

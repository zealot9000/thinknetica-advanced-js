function negativeSum (array) {
    let negativeValues = array.filter(element => element < 0)
    let count = negativeValues.length;
    let sum = negativeValues.reduce(function(codeSum, record) {
        return codeSum + record;
    })

    return {count, sum};
};

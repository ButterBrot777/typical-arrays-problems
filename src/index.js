
exports.min = function min (array) {
    if( !array || array.length === 0 ) return 0;
    return array.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
    if( !array || array.length === 0 ) return 0;
    return array.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
    if( !array || array.length === 0 ) return 0;
    let sum = 0;
    array.reduce((acc, elem) => {
        sum = acc + elem;
        return sum;
    }, null);
    return Number((sum / array.length).toFixed(2));
}

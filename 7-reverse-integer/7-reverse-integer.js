/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let a = String(Math.abs(x));
    a = Number(a.split('').reverse().join(''));
    a = isNegative ? -a : a;
    return a < -(2**31) ? 0 : a > 2**31 - 1 ? 0 : a
};
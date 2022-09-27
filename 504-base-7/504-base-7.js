/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) {
        return '0';
    }
    let isNeg = num < 0 ? true : false;
    num = Math.abs(num);
    let result = '';
    while(num > 0) {
        let mod = num % 7;
        result = String(mod) + result;
        num = Math.floor(num / 7)
    }
    return isNeg ? '-' + result : result;
};
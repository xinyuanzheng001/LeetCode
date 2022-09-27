/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    let result = [];
    let root = Math.floor(num ** 0.5);
    for(let i = 1; i <= root; i++) {
        let div = Math.floor(num / i);
        if(div === num / i) {
            result.push(i);
            result.push(div);
        }
    }
    return result.reduce((item, acc) => item + acc, 0) === num * 2;
};
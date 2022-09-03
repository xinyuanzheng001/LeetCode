/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let result = [];
    let helper = function(string) {
        if(string.length === n) {
            result.push(Number(string));
            return;
        }
        let lastDigit = Number(string[string.length - 1]) || 0;
        for(let i = 0; i < 10; i++) {
            if(lastDigit - i === k || lastDigit + k === i) {
                string += String(i);
                helper(string);
                string = string.slice(0, string.length - 1);
            }
        }
    }
    for(let i = 1; i < 10; i++){
        helper(String(i));
    }
    return result;
};
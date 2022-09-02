/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let helper = function(string, left, right) {
        if(string.length === 2 * n){
            result.push(string);
            return;
        }
        if(left < n) {
            string += '(';
            helper(string, left+1, right);
            string = string.slice(0, string.length - 1);
        }
        if(right < left) {
            string += ')';
            helper(string, left, right + 1);
            string = string.slice(0, string.length - 1);
        }
    }
    helper('', 0, 0);
    return result;
};
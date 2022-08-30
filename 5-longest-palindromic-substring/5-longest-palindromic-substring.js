/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var helper = function(string, i, j) {
        while(i >= 0 && j < string.length && string[i] === string[j]) {
            i--;
            j++;
        }
        return j - i - 1;
    }
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++) {
        let temp1 = helper(s, i, i);
        let temp2 = helper(s, i, i+1);
        let temp3 = Math.max(temp1, temp2);
        if(temp3 > end - start) {
            start = i - Math.floor((temp3 - 1) / 2);
            end = i + Math.floor(temp3 / 2);
        }
    }
    return s.slice(start, end+1);
};
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = '';
    let helper = function(str) {
        let r = '';
        for(let i = str.length - 1; i >= 0; i--) {
            r += str[i]
        }
        return r;
    }
    let count = 0;
    let n = 0;
    while(n < s.length) {
        if(count % 2 === 0) {
            result += helper(s.slice(n, n+k));
            count = 1;
        } else {
            result += s.slice(n, n + k);
            count = 0;
        }
        n += k;
    }
    return result;
};
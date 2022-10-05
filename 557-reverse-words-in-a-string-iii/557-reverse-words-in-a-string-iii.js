/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ');
    let helper = function(str) {
        let result = '';
        for(let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    
    for(let i = 0; i < s.length; i++) {
        s[i] = helper(s[i])
    };
    return s.join(' ');
};
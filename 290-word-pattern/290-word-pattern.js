/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let temp_p = {};
    let temp_s = {};
    s = s.split(' ');
    if(pattern.length !== s.length) {
        return false;
    }
    for(let i = 0; i < s.length; i++) {
        if(temp_p[pattern[i]] === undefined && temp_s[s[i]] === undefined) {
            temp_p[pattern[i]] = s[i];
            temp_s[s[i]] = pattern[i];
        } else {
            if(temp_p[pattern[i]] !== s[i] || temp_s[s[i]] !== pattern[i]) {
                return false;
            }
        }
    }
    return true;
};
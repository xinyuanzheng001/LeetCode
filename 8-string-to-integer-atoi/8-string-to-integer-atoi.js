/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            if(result.length === 0) {
                continue;
            }
            break;
        } else if(s[i] === '-' || s[i] === '+') {
            if(result.length === 0){
                result += s[i]
            } else {
                break
            }
        } else if(Number(s[i]) || s[i] === '0') {
            result += s[i]
        } else {
            break;
        }
    }
    result = Number(result);
    return result < -(2 ** 31) ? -(2**31) : result > 2 ** 31 - 1 ? 2 ** 31 - 1 : result || 0;
};



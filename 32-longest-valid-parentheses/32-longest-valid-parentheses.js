/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxCount = 0;
    let helper = function(string) {
        let result = [];
        for(let i = 0; i < string.length; i++) {
            if(string[i] === '(') {
                result.push(string[i])
            } else {
                if(result.length === 0) {
                    return false;
                }
                result.pop()
            }
        }
        return result.length === 0;
    }
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === ')') {
            continue;
        }
        let leftPar = ['(']
        for(let j = i + 1; j < s.length; j++) {
            if(s[j] === '('){
                leftPar.push('(');
                continue;
            }
            if((j - i + 1) % 2 != 0) {
                continue;
            }
            if(leftPar.length === (j - i + 1) / 2) {
                if(helper(s.slice(i, j+1))) {
                    maxCount = Math.max(maxCount, j - i + 1)
                    if(s[j+1] === ')') {
                        i = j
                        break;
                    }
                }
            }
        }
    }
    return maxCount;
};
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length > 12) {
        return [];
    }
    let result = [];
    let helper = function(index, temp) {
        if(index === s.length) {
            if(temp.length === 4) {
                result.push(temp.join('.'))
            }
            return;
        } else if(temp.length === 4 && index < s.length) {
            return;
        }
        if(s[index] === '0') {
            temp.push(s[index]);
            helper(index+1, temp.slice());
        } else {
            temp.push(s[index]);
            helper(index+1, temp.slice());
            if(index+1 < s.length) {
                temp[temp.length-1] += s[index+1];
                helper(index+2, temp.slice());
            }
            if(index+2 < s.length && 0 < Number(s.slice(index, index+3)) && Number(s.slice(index, index+3)) <= 255) {
                temp[temp.length-1] += s[index+2];
                helper(index+3, temp.slice());
            }
        }
    }
    helper(0, []);
    return result;
    
};
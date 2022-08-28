/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') {
        return 0
    }
    let count = 1;
    let temp;
    for(let i = 0; i < s.length; i++) {
        temp = s[i];
        for(let j = i + 1; j < s.length; j++) {
            if(temp.includes(s[j])) {
                count = Math.max(count, temp.length);
                break;
            } else if(j === s.length - 1) {
                count = Math.max(count, temp.length + 1)
            }
            temp += s[j]
        }
    }
    return count;
};
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let data = {};
    let result = -1;
    for(let i = 0; i < s.length; i++) {
        if(!data[s[i]]){
            data[s[i]] = [1, i]
        } else {
            data[s[i]][0]++;
        }
    }
    for(let key in data) {
        if(data[key][0] === 1) {
            return data[key][1]
        }
    }
    return -1;
};
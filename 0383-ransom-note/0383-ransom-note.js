/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let data = {};
    for(let i of magazine) {
        if(data[i] === undefined) {
            data[i] = 1;
        } else {
            data[i]++;
        }
    }
    for(let i of ransomNote) {
        if(data[i] !== undefined && data[i] !== 0) {
            data[i]--;
        } else {
            return false;
        }
    }
    return true;
};
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let copy = score.slice().sort((a, b) => a - b);
    let n = score.length;
    let result = [];
    for(let i = 0; i < score.length; i++) {
        let index = n - copy.indexOf(score[i]);
        if(index === 1) {
            result.push('Gold Medal')
        } else if(index === 2) {
            result.push('Silver Medal')
        } else if(index === 3) {
            result.push('Bronze Medal')
        } else {
            result.push(String(index))
        }
    }
    return result;
};
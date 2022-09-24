/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let temp = {};
    for(let i = 0; i < words[0].length; i++){
        if(words[0][i] in temp) {
            temp[words[0][i]][0]++;
        } else {
            temp[words[0][i]] = [1];
        }
    }
    for(let i = 1; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(temp[words[i][j]] !== undefined) {
                if(temp[words[i][j]].length === i) {
                    temp[words[i][j]].push(1)
                } else if(temp[words[i][j]].length === i + 1) {
                    temp[words[i][j]][i]++;
                } else {
                    delete temp[words[i][j]]
                }
            }
        }
    }
    for(let key in temp) {
        if(temp[key].length === words.length) {
            let min = Math.min(...temp[key]);
            for(let i = 0; i < min; i++){
                result.push(key);
            }
        }
    }
    return result;
};
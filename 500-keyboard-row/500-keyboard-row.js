/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let data = {
        first: 'qwertyuiop',
        second: 'asdfghjkl',
        third: 'zxcvbnm'
    }
    let result = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].length === 1) {
            result.push(words[i]);
            continue
        }
        let first_char = words[i][0].toLowerCase();
        let row = data['first'].indexOf(first_char) !== -1 ? 'first' : data['second'].indexOf(first_char) !== -1 ? 'second' : 'third';
        let isTrue = false;
        for(let j = 1; j < words[i].length; j++) {
            if(data[row].indexOf(words[i][j].toLowerCase()) === -1) {
                isTrue = false;
                break;
            } else {
                isTrue = true;
            }
        }
        if(isTrue){
            result.push(words[i])
        }
    }
    return result;
};
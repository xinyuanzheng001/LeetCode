/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let data = {};
    for(let i of s) {
        if(data[i]) {
            return i;
        } else {
            data[i] = 1;
        }
    }
};
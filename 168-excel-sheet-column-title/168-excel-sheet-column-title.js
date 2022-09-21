/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while(columnNumber > 0) {
        if(columnNumber === 26) {
            result = 'Z' + result;
            break;
        }
        let nextIndex = columnNumber % 26;
        nextIndex = nextIndex === 0 ? 26 : nextIndex;
        let temp = Math.floor(columnNumber / 26);
        columnNumber = temp === columnNumber / 26 ? temp - 1 : temp
        result = String.fromCharCode(64 + nextIndex) + result;
    }
    return result;
};
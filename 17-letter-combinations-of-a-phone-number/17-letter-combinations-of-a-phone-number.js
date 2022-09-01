/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits){
        return []
    }
    let data = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let result = [];
    let helper = function(digit, string) {
        string = string || '';
        if(string.length === digits.length) {
            result.push(string);
            return;
        }
        for(let i = 0; i < data[digit[0]].length; i++) {
            string += data[digit[0]][i];
            helper(digit.slice(1), string);
            string = string.slice(0, string.length - 1);
        }
    }
    helper(digits, '');
    return result;
};
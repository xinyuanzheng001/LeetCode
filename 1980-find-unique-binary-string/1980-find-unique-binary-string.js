/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let result = [];
    let helper = function(string) {
        if(string.length === n) {
            if(nums.indexOf(string) === -1) {
                result.push(string);
            }
            return;
        }
        for(let i = 0; i < 2; i++) {
            string += String(i);
            helper(string);
            string = string.slice(0, string.length - 1);
        }
    }
    helper('');
    return result[0];
};
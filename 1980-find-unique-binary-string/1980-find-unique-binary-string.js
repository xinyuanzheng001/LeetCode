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
                return string;
            }
            return;
        }
        for(let i = 0; i < 2; i++) {
            string += String(i);
            let a = helper(string);
            if(a !== undefined) {
                return a;
            }
            string = string.slice(0, string.length - 1);
        }
    }
    // helper('');
    return helper('');
};
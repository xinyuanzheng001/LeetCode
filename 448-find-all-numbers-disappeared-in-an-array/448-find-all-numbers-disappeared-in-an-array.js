/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let i = 1; i < nums.length+1; i++) {
        result.push(i);
    }
    result = result.filter(x => !nums.includes(x));
    return result;
};
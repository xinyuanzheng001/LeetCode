/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let i = 1; i < nums.length + 1; i++){
        if(!nums.includes(i)) {
            result.push(i)
        }
    }
    return result;
};
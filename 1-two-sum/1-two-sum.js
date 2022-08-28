/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = {};
    for(let i = 0; i < nums.length; i++) {
        if(result[nums[i]] !== undefined) {
            return [result[nums[i]], i]
        } else {
            result[target-nums[i]] = i
        }
    }
    return []
};
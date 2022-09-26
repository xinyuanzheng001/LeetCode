/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let temp = [];
    for(let i = 0; i < nums.length; i++) {
        if(temp.indexOf(nums[i]) === -1) {
            temp.push(nums[i]);
        } else {
            let index = temp.indexOf(nums[i]);
            temp.splice(index, 1);
        }
    }
    return temp.length === 0;
};
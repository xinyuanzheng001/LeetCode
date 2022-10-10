/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const copy = nums.slice();
    copy.sort((a,b) => a - b);
    if(copy[copy.length-1] / copy[copy.length-2] >= 2) {
        let index = nums.indexOf(copy[copy.length-1]);
        return index;
    }
    return -1;
};
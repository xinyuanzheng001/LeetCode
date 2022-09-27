/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let len = result.length;
        for(let j = index + 1; j < nums2.length; j++){
            if(nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                break;
            }
        }
        if(len === result.length){
            result.push(-1)
        }
    }
    return result;
};
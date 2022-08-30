/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort((a, b) => a - b);
    let n = nums1.length;
    if(n % 2 === 0) {
        let firstNum = n / 2 - 1;
        let secondNum = n / 2;
        return (nums1[firstNum] + nums1[secondNum]) / 2;
    } else {
        return nums1[Math.floor(n / 2)]
    }
};
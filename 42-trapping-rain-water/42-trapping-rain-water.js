/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let count = 0; 
    let max_left = 0;
    let max_right = 0;
    while(left < right) {
        max_right = Math.max(max_right, height[right])
        max_left = Math.max(max_left, height[left])
        if(height[left] <= height[right]) {
            left++;
            if(height[left] < max_left) {
                count+=max_left - height[left]
            }
        } else if(height[left] > height[right]) {
            right--;
            if(height[right] < max_right) {
                count+=max_right - height[right]
            }
        }
    }
    return count
};
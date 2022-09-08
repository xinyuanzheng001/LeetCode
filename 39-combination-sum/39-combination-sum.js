/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var helper = function(arr=[], cand, index) {
        var currSum = arr.reduce((acc, item) => acc + item, 0);
        if(currSum === target) {
            result.push(arr.slice());
            return;
        }
        if(currSum > target) {
            return;
        }
        for(let i = index; i < cand.length; i++) {
            arr.push(cand[i]);
            helper(arr, cand, i);
            arr.pop()
        }
    }
    helper([], candidates, 0);
    return result;
};
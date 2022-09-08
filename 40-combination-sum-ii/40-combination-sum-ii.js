/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = {};
    candidates.sort();
    let helper = function(arr, index) {
        let currSum = arr.reduce((acc, item) => acc + item, 0);
        if(currSum === target) {
            arr.sort();
            result[(JSON.stringify(arr.slice()))] = true
            return;
        }
        if(currSum > target) {
            return;
        }
        for(let i = index; i < candidates.length; i++) {
            if(i > index && candidates[i] === candidates[i - 1]) {
                continue
            }
            arr.push(candidates[i]);
            helper(arr, i+1);
            arr.pop()
        }
    }
    helper([], 0);
    let res = Object.keys(result);
    res = res.map(item => JSON.parse(item))
    return res;
};
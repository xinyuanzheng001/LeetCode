/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    let data = {};
    let helper = function(arr, node) {
        arr.push(node.val);
        let curSum = arr.reduce((acc, item) => acc + item, 0);
        if(curSum === targetSum) {
            if(node.left === null && node.right === null) {
                result.push(arr);
                return
            }
        };
        if(node.left) {
            helper(arr.slice(), node.left)
        }
        if(node.right) {
            helper(arr.slice(), node.right)
        }
        
    }
    if(root) {
        helper([], root)
    }
    return result;
};
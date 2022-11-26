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
 * @return {number[]}
 */
var findMode = function(root) {
    let data = {};
    let count = 0;
    var helper = function(node) {
        if(!node) {
            return
        }
        if(data[node.val]) {
            data[node.val]++;
        } else {
            data[node.val] = 1;
        }
        if(data[node.val] > count) {
            count = data[node.val]
        }
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    let result = [];
    for(let key in data) {
        if(data[key] === count) {
            result.push(key)
        }
    }
    return result;

};
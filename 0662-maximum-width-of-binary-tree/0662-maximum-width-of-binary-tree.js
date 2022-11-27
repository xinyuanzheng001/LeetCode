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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let result = 0;
    let data = [0];
    let helper = function(node, level, index) {
        if(!node) return;
        if(data[level] === undefined) {
            data.push(index)
        } 
        let diff = index - data[level] + 1;
        result = Math.max(result, diff)
        helper(node.left, level + 1, diff * 2)
        helper(node.right, level + 1, diff * 2 + 1)
    }
    helper(root, 0, 0);
    return result;
};
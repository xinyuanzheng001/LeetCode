/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i < Math.floor(n / 2); i++) {
        for(let j = i; j < n - i - 1; j++) {
            // record top-left item
            let temp = matrix[i][j];
            // set top-left item to bot-left
            matrix[i][j] = matrix[n-j-1][i];
            // set bot-left item to bot-right
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            // set bot-right item to top-right
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            // set top-right item to top-left
            matrix[j][n-i-1] = temp;
        }
    }
    return matrix;
};
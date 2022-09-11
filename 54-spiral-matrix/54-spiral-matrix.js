/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = 0;
    let col = 0;
    let row_visited = 0;
    let col_visited = 0;
    let result = [];
    let count = 0;
    while(count <= Math.floor(matrix.length / 2)) {
        while(col < matrix[row].length - col_visited) {
            if(matrix[row][col] !== true && matrix[row][col] !== undefined) {
                result.push(matrix[row][col]);
            }
            matrix[row][col] = true;
            col++;
        };
        row++;
        col--;
        while(row < matrix.length - row_visited) {
            if(matrix[row][col] !== true && matrix[row][col] !== undefined) {
                result.push(matrix[row][col]);
            }
            matrix[row][col] = true;
            row++;
        }
        col--;
        row--;
        while(col >= col_visited){
            if(matrix[row][col] !== true && matrix[row][col] !== undefined) {
                result.push(matrix[row][col]);
            }
            matrix[row][col] = true;
            col--;
        }
        row--;
        col++;

        while(row > row_visited) {
            if(matrix[row][col] !== true && matrix[row][col] !== undefined){
                result.push(matrix[row][col]);
            }
            matrix[row][col] = true;
            row--;
        }
        
        count++;
        row_visited++;
        col_visited++;
        row=row_visited;
        col=col_visited;
    }
    return result;
};
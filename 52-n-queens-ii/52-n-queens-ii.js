/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let makeBoard = function() {
        let board = [];
        for(let i = 0; i < n; i++) {
            let row = [];
            for(let j = 0; j < n; j++) {
                row.push('.');
            }
            board.push(row);
        }
        return board;
    }
    let col_set = new Set();
    let pos_dia_set = new Set();
    let neg_dia_set = new Set();
    let count = 0;
    let helper = function(row) {
        if(row === n) {
            count++;
            return;
        }
        for(let i = 0; i < n; i++) {
            if(col_set.has(i) || pos_dia_set.has(row+i) || neg_dia_set.has(row-i)) {
                continue;
            }
            board[row][i] = 'Q';
            col_set.add(i);
            pos_dia_set.add(row+i);
            neg_dia_set.add(row-i);
            helper(row+1);
            board[row][i] = '.';
            col_set.delete(i);
            pos_dia_set.delete(row+i);
            neg_dia_set.delete(row-i);
        }
    }
    let board = makeBoard();
    helper(0);
    return count;
};
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let makeBoard = function() {
        let board = [];
        for(let i = 0; i < n; i++) {
            let row = [];
            for(let j = 0; j < n; j++) {
                row.push('.')
            }
            board.push(row);
        }
        return board;
    }
    let result = []
    let col_set = new Set();
    let pos_dia_set = new Set();
    let neg_dia_set = new Set();
    let helper = function(row) {
        if(row === n) {
            let b = newBoard.map(item => item.join(''));
            result.push(b);
        }
        for(let i = 0; i < n; i++) {
            if(col_set.has(i) || pos_dia_set.has(i+row) || neg_dia_set.has(row - i)) {
                continue
            }
            col_set.add(i);
            pos_dia_set.add(i+row);
            neg_dia_set.add(row-i);
            newBoard[row][i] = 'Q';
            helper(row+1);
            newBoard[row][i] = '.';
            col_set.delete(i);
            pos_dia_set.delete(i+row);
            neg_dia_set.delete(row-i);
        }
    }
    let newBoard = makeBoard(n);
    helper(0);
    return result;
};
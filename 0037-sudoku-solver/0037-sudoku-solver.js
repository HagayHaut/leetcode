/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValidPlacement = (r, c, char) => {
        for (let i = 0; i < 9; i++) {
            const boxR = 3 * ~~(r / 3) + ~~(i / 3);
            const boxC = 3 * ~~(c / 3) + i % 3;
            if ([board[i][c], board[r][i], board[boxR][boxC]].includes(char)) {
                return false;
            }
        }
        return true;
    }
    
    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let i = 1; i < 10; i++) {
                        const char = `${i}`;
                        if (isValidPlacement(r, c, char)) {
                            board[r][c] = char;
                            if (solve()) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    solve();
};
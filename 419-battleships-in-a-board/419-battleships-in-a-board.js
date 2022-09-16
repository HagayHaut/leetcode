/**
 * @param {character[][]} board
 * @return {number}
 */

const countBattleships = function(board) {
    const n = board.length,
          m = board[0].length,
          dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const isOB = (r, c) => r < 0 || c < 0 || r >= n || c >= m;
    
    const dfs = (r, c) => {
        if (isOB(r, c) || board[r][c] === '.') {
            return;
        }
        board[r][c] = '.';
        dirs.forEach(([R, C]) => dfs(r+R,c+C));
    }
    
    let battleships = 0;
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (board[r][c] === 'X') {
                battleships++;
                dfs(r, c);
            }
        }
    }
    
    return battleships;
};
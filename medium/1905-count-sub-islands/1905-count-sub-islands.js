/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function(grid1, grid2) {
    const [m,n,a,b] = [grid1.length, grid1[0].length, grid1, grid2];
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let result = 0;
    
    const isIB = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    const dfs = (r, c) => {
        let res = true;
        if (!a[r][c]) res = false;
        b[r][c] = 0;
        directions.forEach(([dr,dc]) => {
            const row = r + dr,
                  col = c + dc;
            if (isIB(row, col) && b[row][col] ) {
                if (!dfs(row,col)) res = false;
            }
        })
        return res;
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (b[r][c]) if (dfs(r, c)) result++;
        }
    }
    
    return result;
};
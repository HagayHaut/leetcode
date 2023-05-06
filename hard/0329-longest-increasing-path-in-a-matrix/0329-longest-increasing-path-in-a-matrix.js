/**
 * @param {number[][]} matrix
 * @return {number}
 */

// keep a LIP matrix to memoize
// dfs, as you go along, save values in dp


const longestIncreasingPath = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const invalid = (r, c) => r < 0 || c < 0 || r >= m || c >= n;
    
    const dfs = (r, c, prev) => {
        if (invalid(r, c) || prev >= matrix[r][c]) return 0; 
        if (dp[r][c]) return dp[r][c];
        
        let pathLen = 1;
        dirs.forEach(([dr, dc]) => {
            pathLen = Math.max(pathLen, 1 + dfs(dr + r, dc + c, matrix[r][c]))
        });
        dp[r][c] = pathLen;
        return pathLen;
    }
    
    let lip = 0;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            lip = Math.max(lip, dfs(r, c, -1));
        }
    }
    return lip;
};
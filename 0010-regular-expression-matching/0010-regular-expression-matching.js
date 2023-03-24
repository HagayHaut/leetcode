/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const ROWS = s.length;
    const COLS = p.length;
    
    if (!ROWS && !COLS) return true;
    if (!COLS) return false;
    
    const dp = Array(ROWS + 1)
        .fill()
        .map((_, i) => [i ? false : true]);
    
    for (let c = 1; c <= COLS; c++) {
        dp[0][c] = p[c - 1] === '*' ? dp[0][c - 2] : false;
    }
    
    for (let r = 1; r <= ROWS; r++) {
        for (let c = 1; c <= COLS + 1; c++) {
            if (p[c - 1] === '*') {
                dp[r][c] = (p[c - 2] === s[r - 1] || p[c - 2] === '.')
                    ? (dp[r][c - 2] || dp[r - 1][c])
                    : dp[r][c - 2];
            } else if (p[c - 1] === s[r - 1] || p[c - 1] === '.') {
                dp[r][c] = dp[r - 1][c - 1];          
            } else {
                dp[r][c] = false;
            }
        }
    }
    
    return dp[ROWS][COLS];
};
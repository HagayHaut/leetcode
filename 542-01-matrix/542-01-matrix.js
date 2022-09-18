/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    let m = mat.length,
        n = mat[0].length,
        q = [],
        result = Array(m).fill().map(() => Array(n)),
        directions = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const isOB = (r, c) => r < 0 || c < 0 || r >= m || c >= n;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c]) {
                result[r][c] = Infinity;
            } else {
                result[r][c] = 0;
                q.push([r, c]);
            }
        }
    }
    
    while (q.length) {
        const [r, c] = q.shift(),
              curVal = result[r][c];
        
        directions.forEach(([dr, dc]) => {
            const row = dr + r,
                  col = dc + c;
            
            if (isOB(row, col)) return;
            
            if (result[row][col] > curVal + 1) {
                result[row][col] = curVal + 1;
                q.push([row, col]);
            }
        })
    }
    return result;
};
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function(mat) {
    const M = mat.length,
          N = mat[0].length,
          newMat = [];
    
    // GET DIAGONAL LISTS & SORT
    for (let i = M - 1; i >= 1; i--) {
        let r = i,
            c = 0;
        const tempRow = [];
        while (r < M && c < N) {
            tempRow.push(mat[r][c]);
            r++;
            c++;
        }
        tempRow.sort((a, b) => a - b);
        newMat.push(tempRow)
    }
    
    for (let j = 0; j < N; j++) {
        let r = 0,
            c = j;
        const tempRow = [];
        while (r < M && c < N) {
            tempRow.push(mat[r][c]);
            r++;
            c++;
        }
        tempRow.sort((a, b) => a - b);
        newMat.push(tempRow)
    }
    
    // CONSTRUCT SORTED MAT FROM DIAGONALS
    const result = [];
    
    for (let row = 0; row < M; row++) {
        let i = 0,
            tempRow = [];
        
        for (let j = 0; j < newMat.length; j++) {
            if (i >= N) break;
            if (!newMat[j].length) continue;
            tempRow.push(newMat[j].pop());
            i++;
        }
        
        result.push(tempRow);
    }
    
    return result.reverse();
    
};
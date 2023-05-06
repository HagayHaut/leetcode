/**
 * @param {number[][]} land
 * @return {number[][]}
 */
const findFarmland = function(land) {
    const m = land.length,
          n = land[0].length;
    
    const valid = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    const getMaxRC = (r, c) => {
        while (r < m - 1 && land[r+1][c]) r++;
        while (c < n - 1 && land[r][c+1]) c++;
        return [r, c];
    }
    
    const flood = (r, c) => {
        if (valid(r, c) && land[r][c]) {
            land[r][c] = 0;
            flood(r + 1, c);
            flood(r, c + 1);
        }
    }
    
    const result = [];
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c]) {
                const [maxR, maxC] = getMaxRC(r, c);
                flood(r, c);
                result.push([r, c, maxR, maxC]);
            }
        }
    }
    
    return result;
};
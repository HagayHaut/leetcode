/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]],
          n = image.length,
          m = image[0].length,
          oldColor = image[sr][sc];
    
    const isIB = (r, c) => r >= 0 && c >= 0 && r < n && c < m;
    
    const flood = (r, c) => {
        if (isIB(r, c) && image[r][c] === oldColor) {
            image[r][c] = newColor;
            dirs.forEach(([R, C]) => flood(r+R, c+C));
        }
    }
    
    if (image[sr][sc] !== newColor) flood(sr, sc);
    
    return image;
}


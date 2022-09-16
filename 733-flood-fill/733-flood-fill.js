/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]],
          oldColor = image[sr][sc];
    
    const flood = (r, c) => {
        if (image[r] && image[r][c] === oldColor) {
            image[r][c] = newColor;
            dirs.forEach(([row, col]) => flood(r+row, c+col));
        }
    }
    
    if (image[sr][sc] !== newColor) flood(sr, sc);
    return image;
}


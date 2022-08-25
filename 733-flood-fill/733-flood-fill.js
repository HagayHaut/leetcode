/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    
    dfs(image, sr, sc, image[sr][sc], newColor)
    return image;
}

function dfs(image, sr, sc, color, newColor) {
    if (
        sr < 0 || sc < 0||
        sr >= image.length || sc >= image[0].length ||
        image[sr][sc] !== color
    ) {
        return;
    }
    image[sr][sc] = newColor;
    dfs(image, sr-1, sc, color, newColor);
    dfs(image, sr+1, sc, color, newColor);
    dfs(image, sr, sc-1, color, newColor);
    dfs(image, sr, sc+1, color, newColor);
}
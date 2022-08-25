/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    let m = mat.length,
        n = mat[0].length,
        queue = [],
        result = [],
        directions = [[1,0],[-1,0],[0,1],[0,-1]],
        newRow;
    
    for (let y = 0; y < m; y++) {
        (newRow = []).length = n;
        result.push(newRow);
        for (let x = 0; x < n; x++) {
            if (mat[y][x] === 0) {
                queue.push([y,x]);
                result[y][x] = 0;
            } else {
                result[y][x] = Infinity;
            }
        }
    }
    
    while (queue.length) {
        let [y, x] = queue.shift(),
            currVal = result[y][x];
        
        for (const dir of directions) {
            const currX = x + dir[1],
                  currY = y + dir[0];
            if (
                currY < 0 ||
                currY >= m ||
                currX < 0 ||
                currX >= n
            ) {
                continue;
            }
            else if (result[currY][currX] > currVal + 1) {
                result[currY][currX] = currVal + 1;
                queue.push([currY, currX]);
            }
        }
    }
    return result;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let res = 0;
    const n = grid[0].length;
    for (const row of grid) {
        let l = 0, r = n - 1;
        while (l <= r) {
            const mid = (l + r) >> 1;
            if (row[mid] < 0) r = mid - 1;
            else l = mid + 1;
        }
        res += (n - l);
    }
    return res;
};
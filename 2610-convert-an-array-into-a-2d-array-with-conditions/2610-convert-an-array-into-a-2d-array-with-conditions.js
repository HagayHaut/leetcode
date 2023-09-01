/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const map = nums.reduce((acc, cur) => {
        acc.set(cur, acc.get(cur) ?? 0);
        acc.set(cur, acc.get(cur) + 1);
        return acc;
    }, new Map());
    
    const mat = [];
    
    for (const [num, count] of map) {
        while (mat.length < count) mat.push([]);
        for (let i = 0; i < count; i++) {
            mat[i].push(num);
        }
    }
    return mat;
};
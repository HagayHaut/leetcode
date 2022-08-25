/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let maxVol = 0,
        l = 0,
        r = height.length - 1;
    while (l < r) {
        const curVol = Math.min(height[l], height[r]) * (r - l);
        maxVol = Math.max(maxVol, curVol);
        height[l] < height[r] ? l++ : r--;
    }
    
    return maxVol;
}
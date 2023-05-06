/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
    let [minPos, maxPos, leftBound, res] = [-1, -1, -1, 0];
    nums.forEach((num, i) => {
        if (num < minK || num > maxK) leftBound = i;
        if (num === minK) minPos = i;
        if (num === maxK) maxPos = i;
        res += Math.max(0, Math.min(minPos, maxPos) - leftBound);
    })
    return res;
};
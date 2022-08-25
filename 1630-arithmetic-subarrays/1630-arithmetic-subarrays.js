/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const isArithmetic = arr => {
    if (arr.length < 3) return true;
    arr.sort((a, b) => a - b);
    const interval = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== interval) return false;
    }
    return true;
}

const checkArithmeticSubarrays = function(nums, l, r) {
    return l.map((lv, i) => isArithmetic(nums.slice(l[i], r[i] + 1)))
};
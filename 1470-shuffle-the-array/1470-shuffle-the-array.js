/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    const first = nums.slice(0,n),
          second = nums.slice(n),
          result = [];
    let i = 0;
    while (i < n) {
        result.push(first[i], second[i]);
        i++;
    }
    return result;
};
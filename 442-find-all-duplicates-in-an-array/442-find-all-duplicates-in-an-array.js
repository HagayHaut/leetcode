/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const seen = new Set(),
          res = [];
    nums.forEach(n => {
        if (seen.has(n)) res.push(n);
        seen.add(n);
    })
    return res;
};
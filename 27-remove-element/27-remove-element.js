/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    const swap = (i, j) => (
        [nums[i], nums[j]] = [nums[j], nums[i]]
    );
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== val) swap(l, r), l++;
    }
    return l;
};


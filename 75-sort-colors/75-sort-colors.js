/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// with bucket sort: O(n) time & space
// with 2 pointers => O(n) time, O(1) space

const sortColors = function(nums) {
    let l = 0,
        r = nums.length - 1,
        i = 0;
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    while (i <= r) {
        if (nums[i] === 0) {
            swap(l, i);
            l++;
        }
        else if (nums[i] === 2) {
            swap(i, r);
            r--;
            // dont want to increment i here
            i--;
        }
        i++;
    }
};


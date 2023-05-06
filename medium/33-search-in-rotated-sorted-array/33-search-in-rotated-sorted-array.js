/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// binary search problem, obvs
// you have two sorted arrays

// in left sorted portion:

// like normal BS, except 
// if target bigger than nums[mid], BS right
// if smaller than nums[mid],
// you need to also check if target
// is smaller than first in array
// if smaller, run BS on right
// if bigger/equal run BS on left

// in right sorted portion: 

// if target smaller than nums[mid], BS left
// if bigger, compare with last in array
//   if smaller/equal than last, BS right
//   if bigger than last, BS left

// how to know if you are left or right?
// if nums[mid] >= nums[left] mid is in left

const search = function(nums, target) {
    let l = 0,
        r = nums.length - 1;
    
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === target) return m;
        
        // in left sorted
        if (nums[m] >= nums[l]) {
            if (nums[m] > target && nums[l] <= target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        // in right sorted
        else {
            if (nums[m] < target && nums[r] >= target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};



























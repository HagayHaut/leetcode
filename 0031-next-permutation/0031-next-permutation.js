/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    const swap = (l, r) => [nums[l], nums[r]] = [nums[r], nums[l]];
    
    const reverse = (l, r) => {
        while (l < r) swap(l++, r--);
    }
    
    const n = nums.length;
    let k, l;
    
    for (k = n - 2; k >= 0; k--) {
        if (nums[k] < nums[k + 1]) break;
    }
    
    if (k < 0) {
        reverse(0, n - 1);
    } else {
       for (l = n - 1; l > k; l--) {
           if (nums[l] > nums[k]) break;
       }
        swap(k, l);
        reverse(k + 1, n - 1);
    }
};
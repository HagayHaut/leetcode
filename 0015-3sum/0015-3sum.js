/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// sort array, do two sum II for each element
const threeSum = function(nums) {
    nums.sort((a, z) => a - z);
    const res = [];
    nums.forEach((num, i) => {
        if (i && num === nums[i - 1]) return;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const curSum = num + nums[l] + nums[r];
            if (curSum < 0) l++;
            else if (curSum > 0) r--;
            else {
                res.push([num, nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    });
    return res;
};
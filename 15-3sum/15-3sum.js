/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// sort array, do two sum II for each element
const threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // eliminate duplicates by skipping duplicates (i-1)
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        // everything <= i has been evaluated
        let left = i + 1,
            right = nums.length - 1;
        // perform sorted two sum
        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right];
            if (curSum < 0) left++;
            else if (curSum > 0) right--;
            else {
                result.push([nums[i], nums[left], nums[right]]);
                // only need to update one pointer
                // skip if same value to avoid duplicates
                // right pointer auto shift from logic above
                left++;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            }
        }
    }
    return result;
};
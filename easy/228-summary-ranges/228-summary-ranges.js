/**
 * @param {number[]} nums
 * @return {string[]}
 */

const summaryRanges = function(nums) {
    const ranges = [];
    
    let i = 0;
    
    while (i < nums.length) {
        const first = nums[i];
        let last;
        while (nums[i] === nums[i+1] - 1) {
            last = nums[++i];
        }
        i++;
        ranges.push(last ? `${first}->${last}` : `${first}`)
    }
    
    return ranges;
};
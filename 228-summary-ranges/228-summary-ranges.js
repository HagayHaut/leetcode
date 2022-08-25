/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const ranges = [];
    
    let i = 0;
    
    while (i < nums.length) {
        const range = [`${nums[i]}`];
        
        while (nums[i] + 1 === nums[i+1]) {
            i++;
            range.push(`${nums[i]}`);
        }
        if (range.length === 1) ranges.push(range[0]);
        else ranges.push(`${range[0]}->${range[range.length - 1]}`)
        i++;
    }
    return ranges;
};
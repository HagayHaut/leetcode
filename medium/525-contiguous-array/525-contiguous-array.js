/**
 * @param {number[]} nums
 * @return {number}
 */

// use count variable:
// decrement w/ 0, increment w/ 1
// so when count is 0, equal 0s & 1s till then

// then also keep track of the count & index
// in a hashmap, so if map.has(count), 
// you know (i - map.get(count)) is equal 0s & 1s
const findMaxLength = function(nums) {
    const counts = new Map();
    let maxLen = 0,
        count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // update count
        if (nums[i] === 0) count--;
        else count++;
        
        // check entire array for equal 0/1
        if (count === 0) maxLen = i + 1;
        
        // if count is in map, compare subarray w/ maxLen
        if (counts.has(count)) {
            maxLen = Math.max(maxLen, i - counts.get(count));
        } 
        // only set new counts
        else counts.set(count, i);
    }
    
    return maxLen;
};
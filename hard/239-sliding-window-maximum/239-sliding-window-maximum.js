/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Monotonically decreasing queue

// if we see values greater than previous, 
// eliminate all pevious values

// use a deque => always decreasing

// if value is greater than top of deck,
// pop it off the deque, make comparison again


const maxSlidingWindow = function(nums, k) {
    const result = [];
    let l = 0,
        r = 0,
        deq = [];
    
    while (r < nums.length) {
        while (deq.length && nums[deq[deq.length - 1]] < nums[r]) {
            deq.pop();
        }
        // stores indices
        deq.push(r)
        
        // if left is OB, remove
        if (l > deq[0]) {
            deq.shift();
        }
        
        if (r + 1 >= k) {
            result.push(nums[deq[0]]);
            l++;
        }
        r++;
    }
    
    return result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

// very unintuitive problem
// kind of a linked list problem
// think of values as pointers that
// point to an index in the array
// like linked list cycle
const findDuplicate = function(nums) {
    let slow = 0,
        fast = 0;
    // use do..while bc they start the same
    // this loop finds the cycle
    // where slow/fast meet is same dist
    // from dup as the 'head'
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    let slow2 = 0;
    // where they meet is the dup
    do {
        slow = nums[slow];
        slow2 = nums[slow2];
    } while (slow !== slow2)

    return slow;
    
};
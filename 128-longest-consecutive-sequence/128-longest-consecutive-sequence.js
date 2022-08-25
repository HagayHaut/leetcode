/**
 * @param {number[]} nums
 * @return {number}
 */

// how to identify a sequence start:
//   no value of (start - 1)

// convert arry to set of O(1) search 

// go through set and check if set contains item - 1

// if it doesn't, start of sequence
// go through sequence until end and count length
// keep track of max length
const longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    let maxSeq = 1,
        seq = 1,
        set = new Set(nums);
    
    set.forEach(n => {
        if (!set.has(n-1)) {
            let i = n+1;
            while (set.has(i)) {
                seq++;
                maxSeq = Math.max(maxSeq,seq);
                i++;
            }
            seq = 1;
        }
    })
    
    return maxSeq;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

// two choices => rob or don't

// rob(arr) = max(arr[0] + arr.slice(2), rob.slice(1));
// that's the recurring problem. True for any length arr

const rob = function(nums) {
    let rob1 = 0,
        rob2 = 0;
    
    nums.forEach(n => {
        const temp = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    })
    
    return rob2;
};
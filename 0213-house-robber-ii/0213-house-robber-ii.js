/**
 * @param {number[]} nums
 * @return {number}
 */

// same as House Robber, but
// street is circular - wraps around
// use it as helper and run it twice:
// once skipping, once skipping last
// avoid 0 output for 1 length nums by adding it to max output

const rob = function(nums) {
    const n = nums.length;
    
    const helper = (l, r) => {
        let [rob1, rob2] = [0, 0];
        for (let i = l; i < r; i++) {
            const robX = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = robX;
        }
        return rob2;
    }
    // catches edge case where only one val in nums
    return Math.max(nums[0], helper(0, n - 1), helper(1, n));
};


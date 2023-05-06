/**
 * @param {number[]} nums
 * @return {number}
 */
// DP -> O(n^2)
// Greedy -> O(n) 

// greedy solution is kinda a bfs
// [2,3,1,1,4]
// 2 can reach 3 & 1
// so consider all the places 3 & 1 can reach
// get reach of each level, repeat
// 2 is level 0,
// 3 & 1 are level 1
// 1 & 4 are level 2

// so keep track of reach for each level
// when reach end, return level

const jump = function(nums) {
    let level = 0;
    // left and right of each level
    let l = 0,
        r = 0;
    
    // guaranteed to reach the last spot
    while (r < nums.length - 1) {
        // find current reach
        let reach = 0;
        for (let i = l; i <= r; i++) {
            reach = Math.max(reach, i + nums[i]);
        }
        l = r + 1; 
        r = reach;
        level++;
    }
    
    return level;
};
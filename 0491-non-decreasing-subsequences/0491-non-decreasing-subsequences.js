/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function(nums) {
    const subs = new Set(),
          n = nums.length;
    
    const add = (seq) => seq.length > 2 && subs.add(seq.slice(1).join('&'));
    
    const backtrack = (seq, i) => {
        const cur = nums[i],
              last = seq.at(-1);
        if (i === n - 1) {
            if (cur >= last) {
                seq.push(cur);
                add(seq);
                seq.pop();
            }
            add(seq);
            return;
        }
        
        if (cur >= last) {
            seq.push(cur);
            backtrack(seq, i + 1);
            seq.pop();
        }
        
        backtrack(seq, i + 1);
    }
    
    backtrack([-Infinity], 0);
    return [...subs].map(s => s.split('&').map(Number));
};
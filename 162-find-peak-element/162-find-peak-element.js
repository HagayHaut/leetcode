/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    const n = nums.length;
    const safeGet = (i) => (
        i === -1 || i === n ? -Infinity : nums[i]
    );
    
    const bs = (l, r) => {
        if (l > r) return -1;
        const m = ~~((l + r) / 2);
        const curr = safeGet(m);
        const next = safeGet(m + 1);
        const prev = safeGet(m - 1);
        if (prev < curr && next < curr) return m;
        if (curr > next) return bs(l, m - 1);
        else return bs(m + 1, r);
    }
    
    return bs(0, n - 1);
};
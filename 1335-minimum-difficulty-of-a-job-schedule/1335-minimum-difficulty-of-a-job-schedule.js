/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    
    if (n < d) return -1;
    
    const memo = {};
    
    const dfs = (start, numDays) => {
        if (numDays === d) return start === n ? 0 : Infinity;
        const key = `${start}-${numDays}`;
        if (key in memo) return memo[key];
        
        const end = n - d + numDays;
        
        let [result, max] = [Infinity, -Infinity];
        
        for (let i = start; i <= end; i++) {
            max = Math.max(max, jobDifficulty[i]);
            result = Math.min(result, max + dfs(i + 1, numDays + 1));
        }
        
        memo[key] = result;
        return result;
    }
    
    return dfs(0, 0);
};
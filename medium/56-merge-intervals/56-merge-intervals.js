/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// sort by start time, then sort two at a time
// either add current interval to merged, 
// or merge with lat in merge
const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b [0]);
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i],
              last = merged[merged.length - 1];
        
        if (curr[0] > last[1]) merged.push(curr);
        else {
            merged[merged.length - 1] = [Math.min(curr[0], last[0]),
                                         Math.max(curr[1], last[1])];
        }
    }
    
    return merged;
};
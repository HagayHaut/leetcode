/**
 * @param {number[][]} intervals
 * @return {number}
 */
// greedy approach is faster than backtracking
// sort by start 
// when you find an overlap, 
// remove meeting with later end-time

const eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    let removed = 0;
    let lastInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        // overlap
        if (lastInterval[1] > intervals[i][0]) {
            removed++;
            lastInterval = lastInterval[1] < intervals[i][1] ? lastInterval : intervals[i];
        }
        // no overlap
        else {
            lastInterval = intervals[i];
        }
    }

    return removed;
};
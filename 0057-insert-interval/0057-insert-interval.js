/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//                                  
const insert = function(intervals, newInterval) {
    const res = [];
    for (let i = 0; i < intervals.length; i++) {
        const curr = intervals[i];
        if (newInterval[1] < curr[0]) {
            res.push(newInterval, ...intervals.slice(i));
            return res;
        } else if (newInterval[0] > curr[1]) {
            res.push(curr);

        } else {
            newInterval = [
                Math.min(newInterval[0], curr[0]),
                Math.max(newInterval[1], curr[1])
            ];
        }
    }
    res.push(newInterval);
    return res;
};
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//                                  
const insert = function(intervals, newInterval) {
    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval[0] > newInterval[1]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        }
        if (interval[1] < newInterval[0]) {
            result.push(interval);
        } 
        else {
            newInterval = [Math.min(newInterval[0], interval[0]),
                           Math.max(newInterval[1], interval[1])]
        }
    }
    result.push(newInterval);
    
    return result;
};
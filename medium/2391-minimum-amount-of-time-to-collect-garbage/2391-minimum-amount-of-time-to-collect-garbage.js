
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let p = 0, m = 0, g = 0, mins = 0;
    // find last i of each type type & count garbage
    garbage.forEach((house, i) => {
        for (const garb of house) {
            if (garb === 'M') m = i;
            if (garb === 'P') p = i;
            if (garb === 'G') g = i;
            mins++;
        }
    });
    // prefix sum
    for (let i = 0; i < travel.length; i++) {
        if (i) travel[i] += travel[i - 1];
    }
    if (p) mins += travel[p - 1]; 
    if (g) mins += travel[g - 1];
    if (m) mins += travel[m - 1];
    return mins;
};
/**
 * @param {number[][]} costs
 * @return {number}
 */

// can do with memoization or dp
// but better with greedy algorithm
// get difference of costB - costA and sort by diff (store c1 & c2)
// first half go to cityB, second half to cityA
const twoCitySchedCost = function(costs) {
    const diffs = costs.map(([a, b]) => [b - a, a, b]);
    diffs.sort((a, b) => a[0] - b[0]);
    let res = 0;
    diffs.forEach(([dif, a, b], i) => {
        res += (i < Math.floor(diffs.length/2) ? b : a);
    })
    return res;
};

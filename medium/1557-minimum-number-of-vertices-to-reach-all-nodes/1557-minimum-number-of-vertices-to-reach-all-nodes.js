/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

// map nodes to nodes that point to them
// find map keys with empty values
const findSmallestSetOfVertices = function(n, edges) {
    const map = {};
    // initialize map to hold empty arrays
    // and map nodes to their 'parents'
    edges.forEach(([from,to]) => {
        map[from] = map[from] || [];
        map[to] = map[to] || [];
        map[to].push(from);
    })
    
    const result = [];
    
    for (const key in map) {
        if (!map[key].length) result.push(key);
    }
    
    return result;
};
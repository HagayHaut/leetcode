/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    
    const adj = Array(n + 1).fill().map(_ => []);
    roads.forEach(([a, b, dist]) => { // build directed adjacency list
        adj[a].push([b, dist]);
        adj[b].push([a, dist]);
    });
    
    const seen = Array(n + 1).fill(false);
    let res = Infinity;
    
    const dfs = (node) => {
        seen[node] = true;
        adj[node].forEach(([neigh, dist]) => {
            res = Math.min(res, dist);
            if (!seen[neigh]) dfs(neigh);
        })
    }
    
    dfs(1);
    
    return res;
};
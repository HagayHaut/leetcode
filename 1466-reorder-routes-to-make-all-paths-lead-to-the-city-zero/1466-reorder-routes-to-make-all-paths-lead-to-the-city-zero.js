/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let count = 0;
    const adj = Array(n).fill().map(_ => []);
    connections.forEach(([a, b]) => {
        adj[a].push([b, 1]);
        adj[b].push([a, 0]);
    })
    
    const dfs = (node, parent) => {
        adj[node].forEach(([child, sign]) => {
            if (child !== parent) {
                count += sign;
                dfs(child, node);
            }
        })
    }
    
    dfs(0, -1);
    
    return count;
};
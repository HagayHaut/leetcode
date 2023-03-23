/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1;
    const adj = Array(n).fill().map(_ => []);
    connections.forEach(([a,b]) => {
        adj[a].push(b);
        adj[b].push(a);
    })
    let connectedComps = 0;
    const seen = Array(n).fill(false);
    
    const dfs = (node) => {
        seen[node] = true;
        adj[node].forEach(neigh => {
            if (!seen[neigh]) dfs(neigh);
        })
    }
    
    for (let node = 0; node < n; node++) {
        if (!seen[node]) dfs(node), connectedComps++;
    }
    
    return connectedComps - 1;
};
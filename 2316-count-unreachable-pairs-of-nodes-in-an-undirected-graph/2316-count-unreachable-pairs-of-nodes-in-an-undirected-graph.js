/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const adj = Array(n).fill().map(_ => []);
    edges.forEach(([a, b]) => {
        adj[a].push(b);
        adj[b].push(a);
    })
    let [numberOfPairs, componentSize, remainingNodes] = [0, 0, n];
    let seen = Array(n).fill(false);
    
    const dfs = (node) => {
        seen[node] = true;
        let count = 1; // number of nodes in component
        adj[node].forEach(neigh => {
            if (!seen[neigh]) count += dfs(neigh);
        })
        return count;
    }
    
    for (let node = 0; node < n; node++) {
        if (!seen[node]) {
            componentSize = dfs(node);
            numberOfPairs += componentSize * (remainingNodes - componentSize);
            remainingNodes -= componentSize;
        }
    }
    
    return numberOfPairs;
};
/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    const adj = Array(roads.length + 1).fill().map(_ => []);
    let fuel = 0;
    
    roads.forEach(([c1, c2]) => {
        adj[c1].push(c2);
        adj[c2].push(c1);
    });

    const dfs = (node, parent) => {
        let reps = 1;
        if (!adj[node] || !adj[node].length) return reps;
        adj[node].forEach(child => {
            if (child !== parent) reps += dfs(child, node);
        })
        if (node) fuel += Math.ceil(reps / seats);
        return reps;
    }
    
    dfs(0, -1);
    return fuel;
};
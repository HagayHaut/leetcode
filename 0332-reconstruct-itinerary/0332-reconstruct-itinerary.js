/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

// create adjacency list 
// directed graph -> city maps to cities it can fly to
const findItinerary = function(tickets) {
    tickets.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
    const adj = {};
    tickets.forEach(([src, dest]) => {
        adj[src] ||= [];
        adj[src].push(dest);
    })
    
    const dfs = (src, output = []) => {
        const neighbors = adj[src] || [];
        while (neighbors.length) {
            const curr = neighbors.shift();
            dfs(curr, output);
        }
        output.push(src);
        return output;
    }
    
    return dfs('JFK').reverse();
};
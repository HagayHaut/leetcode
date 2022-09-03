/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// problem boils down to 
// finding cycle in directed graph
const canFinish = function(numCourses, prereqs) {
    // adjacency list maps courses to their prereqs 
    const adj = Array(numCourses).fill().map(x => []);
    const visited = new Set();
    const arrive = Array(numCourses).fill(0);
    const depart = Array(numCourses).fill(0);
    // build graph
    prereqs.forEach(([crs, req]) => {
        adj[req].push(crs);
    })
    
    const dfs = (node, arrive, depart) => {
        arrive[node]++;
        
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                
                if (dfs(neighbor, arrive, depart)) {
                    return true;
                }
            } else {
                if (!depart[neighbor]) return true;
            }
        }
        depart[node]++;
        return false;
    }
    
    for (let node = 0; node < numCourses; node++) {
        if (!visited.has(node)) {
            if (dfs(node, arrive, depart)) {
                return false;
            }
        }
    }
    
    return true;
};
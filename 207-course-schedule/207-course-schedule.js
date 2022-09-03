/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// problem boils down to 
// finding cycle in directed graph
const canFinish = function(numCourses, prereqs) {
    const graph = new Map();
    const q = [];
    let completed = 0;
    const remainingReqs = Array(numCourses).fill(0);
    
    // build adjacency list
    prereqs.forEach(([crs, req]) => {
        graph.has(req) ? graph.get(req).push(crs) : graph.set(req, [crs]);
        remainingReqs[crs]++;
    })
    
    // start bfs from nodes with no incoming edges
    for (let i = 0; i < numCourses; i++) {
        if (!remainingReqs[i]) q.push(i);
    }
    
    while (q.length) {
        const crs = q.shift();
        // only search reqs if crs has them
        if (graph.has(crs)) {
            graph.get(crs).forEach(req => {
                remainingReqs[req]--;
                if (!remainingReqs[req]) q.push(req);
            })
        }
        
        completed++;
    }
    
    return completed >= numCourses;
}
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const paths = [];
    
    const dfs = (node, path, dest) => {
        if (node === dest) paths.push(path);
        
        for (const neighbor of graph[node]) {
            if (neighbor === dest) {
                paths.push([...path, neighbor]);
            }
            else {
                path.push(neighbor);
                dfs(neighbor, path, dest);
                path.pop();
            }
            
        }
    }
    dfs(0, [0], graph.length - 1);
    return paths;
};
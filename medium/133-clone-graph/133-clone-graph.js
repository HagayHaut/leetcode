/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// use a dfs/bfs and hashmap

// for each node, add its copy as 
// value in hashmap (created)
// check if already cloned
// if not, make a copy and push
// copies of neighbor into clone.neighbor
const cloneGraph = function(node) {
    if (!node) return null;
    const map = new Map();
    
    (function dfs(node) {
        if (map.has(node)) return map.get(node);
        
        const copy = new Node(node.val);
        map.set(node, copy);
        node.neighbors.forEach(neighbor => {
            copy.neighbors.push(dfs(neighbor));
        })
        return copy;
    }(node))
    
    return map.get(node)
};
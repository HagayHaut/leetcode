/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
    const coordinates = [];
    const map = new Map();
    dfs(root, 0, 0);
    // sort by
    coordinates.sort(([aX,aY,aV],[bX,bY,bV]) => {
        return aX - bX || bY - aY || aV - bV;
    })
    
    // coordinates are already sorted by y
    // maps are ordered
    coordinates.forEach(([x, y, val]) => {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    })
    
    return [...map.values()];
    
    function dfs(node, x, y) {
        if (node) {
            coordinates.push([x, y, node.val]);
            dfs(node.left, x - 1, y - 1);
            dfs(node.right, x + 1, y - 1);
        }
    }
};
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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const paths = [];
    if (!root) return paths;
    
    const dfs = (node, path) => {
        path += node.val;
        if (!node.left && !node.right) {
            paths.push(path);
            return;
        }
        
        if (node.left) dfs(node.left, path + '->');
        if (node.right) dfs(node.right, path + '->');
    }
    dfs(root, '');
    
    return paths;
};
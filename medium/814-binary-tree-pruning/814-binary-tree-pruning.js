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
 * @return {TreeNode}
 */
const pruneTree = function(root) {
    
    const dfs = node => {
        if (!node) return false;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        if (!left) node.left = null;
        if (!right) node.right = null;
        
        return node.val === 1 || left || right;
    }
    
    return dfs(root) ? root : null;
};
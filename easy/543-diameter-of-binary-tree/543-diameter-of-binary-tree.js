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
 * @return {number}
 */
// recursive dfs - null node has height of -1
// dfs returns height, used to calc diameter
const diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const dfs = node => {
        if (!node) return -1;
        
        const left = dfs(node.left),
              right = dfs(node.right),
              diameter = 2 + left + right;
        
        maxDiameter = Math.max(maxDiameter, diameter);
        
        return 1 + Math.max(left, right);
    }
    
    dfs(root);
    return maxDiameter;
};
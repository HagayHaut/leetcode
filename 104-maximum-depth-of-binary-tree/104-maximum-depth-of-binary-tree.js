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
const maxDepth = function(root) {
    const dfs = node => {
        if (!node) return 0;
        const left = dfs(node.left),
              right = dfs(node.right);
        return 1 + Math.max(left, right);
    }
    return dfs(root);
};
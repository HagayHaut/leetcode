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
 * @return {boolean}
 */

// perform DFS to check if all values
// are BETWEEN the child node values
const isValidBST = function(root) {
    const dfs = (node, left, right) => {
        if (!node) return true;
        if (left >= node.val || right <= node.val) return false;
        return dfs(node.left, left, node.val) &&
               dfs(node.right, node.val, right);
    }
    return dfs(root);
};
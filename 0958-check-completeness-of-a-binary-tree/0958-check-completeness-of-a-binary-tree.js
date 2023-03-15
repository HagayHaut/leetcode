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
var isCompleteTree = function(root) {
    const size = (node) => node ? 1 + size(node.left) + size(node.right) : 0;
    const n = size(root);
    const dfs = (node, i) => {
        if (!node) return true;
        if (i >= n) return false;
        return dfs(node.left, 2 * i + 1) && dfs(node.right, 2 * i + 2);
    }
    return dfs(root, 0);
};
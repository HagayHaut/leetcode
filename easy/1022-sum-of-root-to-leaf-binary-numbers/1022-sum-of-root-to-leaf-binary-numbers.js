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
const sumRootToLeaf = function(root) {
    let res = 0;
    const dfs = (node, path = '') => {
        const nextPath = path + `${node.val}`
        if (!node.left && !node.right) {
            res += parseInt(nextPath, 2);
            return;
        }
        if (node.left) dfs(node.left, nextPath);
        if (node.right) dfs(node.right, nextPath);
    }
    dfs(root);
    return res;
};
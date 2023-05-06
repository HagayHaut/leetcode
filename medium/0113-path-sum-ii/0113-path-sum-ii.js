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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = [];

    const dfs = (path, node, sum) => {
        if (!node) return false;
        sum += node.val;
        if (!node.left && !node.right) {
            if (sum === targetSum) res.push([...path, node.val]);
            return;
        }
        dfs([...path, node.val], node.left, sum)
        dfs([...path, node.val], node.right, sum)
    }

    dfs([], root, 0);
    return res;
};
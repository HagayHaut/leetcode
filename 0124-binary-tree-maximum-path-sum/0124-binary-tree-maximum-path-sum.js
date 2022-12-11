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

// 4 possible paths through each node:
// 1. through node and left child
// 2. through node and right child
// 3. stops at node (if val bigger than max(left, right))
// 4. through node, left child, and right child

const maxPathSum = function(root) {
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // compare left OR right side sums
        const withChild = Math.max(node.val + left, node.val + right);
        // check if actually need a child
        const withoutChild = Math.max(withChild, node.val);
        // compare left AND right sums against other vals
        const max = Math.max(withoutChild, node.val + left + right);
        // update result if needed
        maxSum = Math.max(maxSum, max);
        return withoutChild;
    }

    dfs(root);
    return maxSum;
};
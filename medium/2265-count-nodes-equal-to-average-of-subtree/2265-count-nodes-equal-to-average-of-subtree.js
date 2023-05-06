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

// dfs returns [sum, nodeCount]
const averageOfSubtree = function(root) {
    let count = 0;
    const dfs = node => {
        if (!node) return [0, 0];
        const [lS, lC] = dfs(node.left),
              [rS, rC] = dfs(node.right);
        const curSum = lS + rS + node.val;
        const nodeCount = lC + rC + 1;
        if (Math.floor(curSum / nodeCount) === node.val) {
            count++;
        }
        return [curSum, nodeCount];
    }
    
    dfs(root);
    
    return count;
};
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
 * @return {string[][]}
 */
const printTree = function(root) {
    const getHeight = node => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }
    
    const height = getHeight(root),
          width = 2**height - 1,
          result = Array(height).fill().map(() => Array(width).fill(''));
    
    const dfs = (node, r, c) => {
        if (!node) return;
        result[r][c] += node.val;
        const cDiff = 2**(height - 2 - r);
        dfs(node.left, r + 1, c - cDiff);
        dfs(node.right, r + 1, c + cDiff);
    }
    
    dfs(root, 0, (width - 1) / 2);
    
    return result;
};
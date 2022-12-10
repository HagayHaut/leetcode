/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxAncestorDiff(root: TreeNode | null): number {
    if (!root) return 0;
    
    const dfs = (node: TreeNode | null, min: number, max: number): number => {
        if (!node) return max - min;
        
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        
        const left = dfs(node.left, min, max),
              right = dfs(node.right, min, max);
        
        return Math.max(left, right);
    };
    
    return dfs(root, root.val, root.val);
};
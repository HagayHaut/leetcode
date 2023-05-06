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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;
    
    const root = new TreeNode(preorder[0]);
    const inorderIdx = inorder.indexOf(preorder[0]);
    
    root.left = buildTree(preorder.slice(1, inorderIdx + 1), inorder.slice(0, inorderIdx));
    root.right = buildTree(preorder.slice(inorderIdx + 1), inorder.slice(inorderIdx + 1));
    
    return root;
};
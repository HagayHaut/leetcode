/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// two main tricks here:
// 1. First value in preorder is root
//     a. remove from preorder
//     b. remove same val from inorder
// 2. Every value to left of inorder root on left, right on right
//     a. then partition preorder at same spot

// base case: if length === 1, just make a node
const buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    const root = new TreeNode(preorder[0]),
          mid = inorder.indexOf(preorder[0]);
    
    root.left = buildTree(preorder.slice(1,mid + 1), inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    
    return root;
};
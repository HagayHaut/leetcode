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
const countNodes = function(root) {
    if (!root) return 0;
    
    let leftDepth = 0,
        rightDepth = 0,
        curr = root;
    
    while (curr) {
        leftDepth++;
        curr = curr.left;
    }
    
    curr = root;

    while (curr) {
        rightDepth++;
        curr = curr.right;
    }
    
    if (rightDepth === leftDepth) {
        return (2**leftDepth) - 1;
    }
    
    return 1 + countNodes(root.left) + countNodes(root.right);
};
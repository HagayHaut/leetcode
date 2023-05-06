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
const evaluateTree = function(root) {
    if (!root.val) return false;
    if (root.val === 1) return true;
    
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);
    
    return root.val === 2 ? right || left : right && left;
};
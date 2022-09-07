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
 * @return {string}
 */
const tree2str = function(root) {
    if (!root) return '';
    
    const left = tree2str(root.left);
    const right = tree2str(root.right);
    
    if (!left && !right) return `${root.val}`;
    if (!right) return `${root.val}(${left})`;
    return `${root.val}(${left})(${right})`;
};
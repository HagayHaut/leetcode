/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */


const mergeTrees = function(r1, r2) {
    if (!r1 && !r2) return null;
    const root = new TreeNode((r1 ? r1.val : 0) + (r2 ? r2.val : 0));
    root.left = mergeTrees(r1 ? r1.left : null, r2 ? r2.left : null);
    root.right = mergeTrees(r1 ? r1.right : null, r2 ? r2.right : null);
    return root;
};
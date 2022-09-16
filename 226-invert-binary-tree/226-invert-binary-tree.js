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
 * @return {TreeNode}
 */
const invertTree = function(root) {
   if (root) {
       const tmp = root.left;
       root.left = root.right;
       root.right = tmp;
       invertTree(root.left)
       invertTree(root.right)
   }
    return root;
};


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

// perform DFS to check if all values
// are BETWEEN the child node values
const isValidBST = function(root) {
    
    // the recursive DFS
    const valid = (node, left, right) => {
        // null nodes are valid
        if (!node) return true;
        
        // check if value is BETWEEN
        if (node.val >= right || node.val <= left) {
            return false;
        }
        
        return (valid(node.left, left, node.val) && 
                valid(node.right, node.val, right))
    }
    return valid(root);
};
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
const pseudoPalindromicPaths  = function(root) {
    const dfs = (node, count = 0) => {
        if (!node) return 0;
        
        count ^= 1 << node.val;
        let res = dfs(node.left, count) + dfs(node.right, count);
        
        // check if just one 1 digit in binary count
        if (!node.left && !node.right && (count & (count - 1)) === 0) {
            res++;
        }
        return res;
    }
    
    return dfs(root);
};
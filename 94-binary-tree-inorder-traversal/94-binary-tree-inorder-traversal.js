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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const res = [];
    
    (function dfs(node) {
        if (!node) return;
        
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
        
    }(root))
    
    return res;
};


//     4
//  2     5  
// 1 3   6 7 

// 1234567






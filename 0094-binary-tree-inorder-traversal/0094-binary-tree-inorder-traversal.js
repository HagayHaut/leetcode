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
    const data = [];
    const dfs = (node) => {
        if (node) {
            dfs(node.left);
            data.push(node.val);
            dfs(node.right);
        }
    }
    dfs(root);
    return data;
};


//     4
//  2     5  
// 1 3   6 7 

// 1234567






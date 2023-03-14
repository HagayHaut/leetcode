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
const sumNumbers = function(root) {
    let res = 0;
    
    const dfs = (node, sum) => {
        if (!node) return;
        sum += node.val;
        if (!node.left && !node.right) {
            res += parseInt(sum);
            return;
        };
        
        const left = sum + dfs(node.left, sum);
        const right = sum + dfs(node.right, sum);
        
        return sum;
    }
    
    
    dfs(root, '');
    
    return res;
};
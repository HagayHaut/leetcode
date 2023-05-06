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
const sumEvenGrandparent = function(root) {
    let sum = 0;
    
    const dfs = (node, parentIsEven) => {
        if (!node) return 0;
        
        if (parentIsEven) {
            if (node.left) {
                const lVal = node.left.val;
                sum += node.left.val;
            }
            if (node.right) {
                sum += node.right.val;
            }
        }
        
        const isEven = node.val % 2 === 0;
        dfs(node.left, isEven);
        dfs(node.right, isEven);
    }
    dfs(root, false);
    return sum;
};
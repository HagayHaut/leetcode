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
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
    
    const areSameArray = (a, b) => {
        return a.length === b.length && a.every((n, i) => n === b[i]);
    }
    
    const dfs = (node, leaves) => {
        if (!node) return;
        if (!node.left && !node.right) leaves.push(node.val);
        dfs(node.left, leaves);
        dfs(node.right, leaves);
    };
    
    const leaves1 = [],
          leaves2 = [];
    
    dfs(root1, leaves1);
    dfs(root2, leaves2);
    
    return areSameArray(leaves1, leaves2);
};
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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function(root) {
    const map = new Map();
    const result = [];
    
    const dfs = (node) => {
        if (!node) return;
        const subtree = `${node.val},${dfs(node.left)},${dfs(node.right)}`;
        map.set(subtree, (map.get(subtree) || 0) + 1);
        if (map.get(subtree) === 2) result.push(node);
        return subtree;
    }
    
    dfs(root);
    return result;
};


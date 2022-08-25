/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// dfs searching for either node

// if found node, return its value
// otherwise return null
// if a node is returned two nodes, its the LCA

const lowestCommonAncestor = function(root, p, q) {
    
    const dfs = node => {
        if (!node || node === p || node === q) return node;
        
        const left = dfs(node.left),
              right = dfs(node.right);
        
        if (left && right) return node;
        if (!left && !right) return null;
        return left || right;
    }
    
    return dfs(root);
};
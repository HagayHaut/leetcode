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
const balanceBST = function(root) {
    const vals = [];
    
    (function dfs(node) {
        if (!node) return null;
        dfs(node.left);
        vals.push(node.val);
        dfs(node.right);    
    }(root))
    
    function build(l,r) {
        if (l > r) return null;
        
        const mid = (l + r) >> 1,
              node = new TreeNode(vals[mid]);
        
        node.left = build(l, mid - 1);
        node.right = build(mid + 1, r);
        
        return node;
        
    }
    return build(0, vals.length - 1);
};
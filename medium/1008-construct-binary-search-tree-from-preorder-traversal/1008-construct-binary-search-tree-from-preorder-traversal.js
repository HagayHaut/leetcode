/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
    let i = 0;
    
    const build = (bound) => {
        if (i >= preorder.length || preorder[i] > bound) {
            return null;
        }
        
        const node = new TreeNode(preorder[i]);
        i++;
        node.left = build(node.val);
        node.right = build(bound);
        
        return node;
    }
    
    return build(Infinity);
};
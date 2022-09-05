/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
    const data = [];
    
    const dfs = (node) => {
        if (!node) return;
        data.push(node.val);
        node.children.forEach(child => dfs(child));
    }
    
    dfs(root);
    return data;
};
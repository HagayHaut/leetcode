/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function(root) {
    const data = [];
    
    const dfs = (node) => {
        if (!node) return;
        node.children.forEach(child => dfs(child));
        data.push(node.val);
    }
    
    dfs(root);
    return data;
};
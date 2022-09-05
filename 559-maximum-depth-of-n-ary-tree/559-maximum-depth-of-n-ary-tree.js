/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    root.children.forEach(child => {
        depth = Math.max(depth, maxDepth(child));
    })
    return depth + 1;
};
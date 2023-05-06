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
    
    const q = [root];
    let levels = 0;
    
    while (q.length) {
        const qLen = q.length;
        levels++;
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            node.children.forEach(child => q.push(child));
        }
    }
    return levels;
};
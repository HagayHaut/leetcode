/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (!root) return [];
    const q = [root];
    const levels = [];
    
    while (q.length) {
        const qLen = q.length; 
        const level = [];
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            level.push(node.val);
            node.children.forEach(child => q.push(child));
        }
        levels.push(level);
    }
    
    return levels;
};
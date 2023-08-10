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
 * @return {number[][]}
 */

// just BFS with a queue, but
// have to have inner loop to 
// empty items of level in queue
const levelOrder = function(root) {
    if (!root) return [];
    const levels = [];
    const q = [root];
    while (q.length) {
        const level = [];
        let levelLength = q.length;
        while (levelLength--) {
            const node = q.shift();
            level.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        levels.push(level);
    }
    return levels;
};
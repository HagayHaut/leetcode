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
    const result = [];
    if (!root) return result;
    for (let q = [root]; q.length;) {
        const qLen = q.length,
              level = [];
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            level.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        result.push(level);
    }
    return result;
};
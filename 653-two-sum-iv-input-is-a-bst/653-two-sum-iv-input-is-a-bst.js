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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
    const seen = new Set();
    const q = [root];
    while (q.length) {
        const node = q.shift();
        if (seen.has(k - node.val)) return true;
        seen.add(node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }
    return false;
};
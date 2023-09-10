/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if (n < 2) return n ? [new TreeNode()] : [];
    const res = [];
    for (let i = 1; i < n; i += 2) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n - 1 - i);
        for (const l of left) {
            for (const r of right) {
                const root = new TreeNode(0, l, r);
                res.push(root);
            }
        }
    }
    return res;
};
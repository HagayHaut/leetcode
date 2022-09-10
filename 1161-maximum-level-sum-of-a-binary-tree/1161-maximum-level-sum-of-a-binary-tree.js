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
 * @return {number}
 */
const maxLevelSum = function(root) {
    const q = [root];
    
    let minLevel,
        curLevel = 0,
        maxSum = -Infinity;
    
    while (q.length) {
        const qLen = q.length;
        curLevel++;
        let levelSum = 0;
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            levelSum += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (levelSum > maxSum) {
            minLevel = curLevel;
            maxSum = levelSum;
        };
    }
    
    return minLevel;
};
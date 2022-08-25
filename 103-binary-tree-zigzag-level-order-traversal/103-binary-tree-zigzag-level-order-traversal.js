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
const zigzagLevelOrder = function(root) {
    if (!root) return []
    const levels = [],
          q = [root];
    
    let ltr = true;
    
    while (q.length) {
        const qLen = q.length,
              level = [];
        
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            level.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        
        levels.push(ltr ? level : level.reverse());
        ltr = !ltr;
    }
    
    return levels;
};
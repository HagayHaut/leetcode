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
 * @return {number[]}
 */
const rightSideView = function(root) {
    if (!root) return [];
    
    const q = [root],
          result = [];
    
    while (q.length) {
        let last = null;
        const qLen = q.length;
        
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            last = node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        
        result.push(last);
    }
    
    return result;
};
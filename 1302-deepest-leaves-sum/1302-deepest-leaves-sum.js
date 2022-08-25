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


const deepestLeavesSum = function(root) {
    let q = [root],
        row = [];
    
    while (q.length) {
        const qLen = q.length,
              curRow = [];
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
            
            curRow.push(node.val);
        }
        row = curRow;
    }
    
    return row.reduce((a, b) => a + b);
};
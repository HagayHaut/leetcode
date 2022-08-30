/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// bfs to put nodes in level array l -> r
// update pointers of nodes in level array to index + 1
const connect = function(root) {
    if (!root) return root;
    const q = [root];
    
    while (q.length) {
        const qLen = q.length,
              level = [];
        
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            level.push(node);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        
        level.forEach((node, i) => node.next = i === level.length - 1 ? null : level[i + 1]);
    }
    return root;
};


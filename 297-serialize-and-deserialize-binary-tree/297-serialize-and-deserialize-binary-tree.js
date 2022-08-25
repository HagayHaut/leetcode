/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// use a preorder traversal dfs
// use comma as separator of nodes
// O(n)
const serialize = function(root) {
    const res = [];
    
    (function dfs(node) {
        if (!node) {
            res.push('N');
            return;
        };
        
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }(root))
    
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// O(n)
const deserialize = function(data) {
    let vals = data.split(','),
          i = 0;
    
    const dfs = () => {
        if (vals[i] === 'N') {
            i++;
            return null;
        } 
        const node = new TreeNode(parseInt(vals[i]));
        i++;
        
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
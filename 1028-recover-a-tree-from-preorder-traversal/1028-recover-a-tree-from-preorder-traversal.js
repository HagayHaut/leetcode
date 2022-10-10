/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
const recoverFromPreorder = function(s) {
    const levels = s.split(/\d/).filter(c => c).map(c => c.length);
    const vals = s.split(/-+/);
    
    const root = new TreeNode(vals[0]);
    const currParent = [root];
    let i = 1;

    while (i < vals.length) {
        const val = vals[i];
        const node = new TreeNode(val);
        const level = levels[i - 1];
        const parent = currParent[level - 1];

        if (!parent.left) parent.left = node;
        else if (!parent.right) parent.right = node;

        currParent[level] = node;
        i++;
    }

    return root;
};
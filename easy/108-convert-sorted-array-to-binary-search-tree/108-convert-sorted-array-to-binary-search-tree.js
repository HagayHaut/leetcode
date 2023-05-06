/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    const tree = (l, r) => {
        if (l > r) return null;
        
        const m = Math.floor((l + r) / 2),
              root = new TreeNode(nums[m]);
        
        root.left = tree(l, m - 1);
        root.right = tree(m + 1, r);
        
        return root;
    }
    
    return tree(0, nums.length - 1);
};
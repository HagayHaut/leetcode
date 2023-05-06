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
const constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;
    const maxIndex = getMaxIndex(nums),
          root = new TreeNode(nums[maxIndex]);
    
    root.left = constructMaximumBinaryTree(nums.slice(0,maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    
    return root;
};

const getMaxIndex = nums => {
    let max = nums[0],
        maxIndex = 0;
    
    nums.forEach((n, i) => {
        if (max < n) {
            max = n;
            maxIndex = i;
        }
    })
    return maxIndex;
}
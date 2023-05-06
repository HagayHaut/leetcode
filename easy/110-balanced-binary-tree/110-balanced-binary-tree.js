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
 * @return {boolean}
 */


const isBalanced = function(root) {
  const dfs = node => {
      if (!node) return [true, 0];
      
      const left = dfs(node.left),
            right = dfs(node.right),
            balanced = left[0] && right[0] &&
                       Math.abs(left[1] - right[1]) < 2;
      
      return [balanced, 1 + Math.max(left[1], right[1])];
  }
  
  return dfs(root)[0];
}
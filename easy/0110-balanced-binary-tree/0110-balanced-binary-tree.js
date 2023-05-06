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


const isBalanced = (root, { abs, max } = Math) => {
    
  const dfs = node => {
      if (!node) return [true, 0];
      
      const [lBalanced, lHeight] = dfs(node.left),
            [rBalanced, rHeight] = dfs(node.right),
            balanced = (lBalanced && rBalanced &&
                       abs(lHeight - rHeight) < 2);
      
      return [balanced, 1 + max(lHeight, rHeight)];
  }
  
  return dfs(root)[0];
}
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool IsBalanced(TreeNode root) {
        int[] dfs(TreeNode node) {
            
            int[] res = new int[2];
            
            if (node == null) {
                res[0] = 1;
                res[1] = 0;
                return res;
            }
            
            int[] left = dfs(node.left);
            int[] right = dfs(node.right);
            int balanced = left[0] == 1 && right[0] == 1 && Math.Abs(left[1] - right[1]) < 2 ? 1 : 0;
            
            res[0] = balanced;
            res[1] = 1 + Math.Max(left[1], right[1]);
            return res;
        }
        
        return dfs(root)[0] == 1;
    }
}
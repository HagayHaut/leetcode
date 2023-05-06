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
    public int DiameterOfBinaryTree(TreeNode root) {
        int diameter = 0;
        
        int dfs(TreeNode node) {
            if (node == null) return 0;
            
            int left = dfs(node.left);
            int right = dfs(node.right);
            diameter = Math.Max(diameter, left + right);
            
            return 1 + Math.Max(left, right);
        }
        
        dfs(root);
        return diameter;
    }
}
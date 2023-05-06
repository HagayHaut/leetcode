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
    public int MinDepth(TreeNode root) {
        if (root == null) return 0;
        
        int left = MinDepth(root.left), right = MinDepth(root.right);
        
        if (left == 0 || right == 0) {
            return 1 + Math.Max(left, right);
        } else {
            return 1 + Math.Min(left, right);
        }
    }
}
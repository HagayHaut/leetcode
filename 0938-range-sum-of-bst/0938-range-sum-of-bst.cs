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
    public int RangeSumBST(TreeNode root, int low, int high) {
        if (root == null) return 0;
        
        int sum = 0;
        
        if (low <= root.val && high >= root.val) {
            sum = root.val;
        }
        
        int left = RangeSumBST(root.left, low, high);
        int right = RangeSumBST(root.right, low, high);
        
        return sum + left + right;
    }
}
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
    public IList<int> PostorderTraversal(TreeNode root) {
        IList<int> res = new List<int>();
        
        void dfs(TreeNode node) {
            if (node == null) return;
            dfs(node.left);
            dfs(node.right);
            res.Add(node.val);
        }
        
        dfs(root);
        return res;
    }
}
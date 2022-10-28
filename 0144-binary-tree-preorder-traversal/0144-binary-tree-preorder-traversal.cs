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
    public IList<int> PreorderTraversal(TreeNode root) {
        IList<int> res = new List<int>();
        
        void dfs(TreeNode node) {
            if (node == null) return;
            res.Add(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        
        dfs(root);
        return res;
    }
}
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
    public int KthSmallest(TreeNode root, int k) {
        IList<int> data = new List<int>();
        
        void dfs(TreeNode node) {
            
            if (node == null || data.Count == k)
            {
                return;
            }
            
            dfs(node.left);
            data.Add(node.val);
            dfs(node.right);
        }
        
        dfs(root);
        Console.WriteLine(data.Count);
        return data[k - 1];
    }
}
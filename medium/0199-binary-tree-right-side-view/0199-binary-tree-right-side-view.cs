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
    public IList<int> RightSideView(TreeNode root) {
        if (root == null) return new int[0];
        
        Queue<TreeNode> q = new Queue<TreeNode>();
        List<int> res = new List<int>();
        q.Enqueue(root);
        
        while (q.Count > 0) {
            int prev = 0;
            int qLen = q.Count;
            
            for (int i = 0; i < qLen; i++) {
                TreeNode node = q.Dequeue();
                prev = node.val;
                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);
            }
            
            res.Add(prev);
        }
        
        return res.ToArray();
    }
}
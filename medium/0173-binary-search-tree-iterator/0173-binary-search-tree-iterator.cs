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
public class BSTIterator {
    IList<int> data = new List<int>();
    int pointer = -1;
    
    public BSTIterator(TreeNode root) {
        this.data = this.inorder(root);
    }
    
    public int Next() {
        return this.data[++this.pointer];
    }
    
    public bool HasNext() {
        return this.pointer < this.data.Count - 1;
    }
    
    private IList<int> inorder(TreeNode root) {
        IList<int> data = new List<int>();
        
        void dfs(TreeNode node) {
            if (node.left != null) dfs(node.left);
            data.Add(node.val);
            if (node.right != null) dfs(node.right);
        }
        
        dfs(root);
        return data;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */
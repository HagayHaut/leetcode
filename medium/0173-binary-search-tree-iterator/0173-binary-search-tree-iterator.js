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
 */
class BSTIterator {
    constructor(root) {
        this.data = this.inorder(root);
        this.pointer = -1;
    }

    next() {
        this.pointer++;
        return this.data[this.pointer];
    }

    hasNext() {
        return this.pointer < this.data.length - 1;
    }

    inorder(root) {
        const data = [];

        const dfs = node => {
            if (!node) return;

            dfs(node.left);
            data.push(node.val);
            dfs(node.right);
        }

        dfs(root);

        return data;
    }
};



/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
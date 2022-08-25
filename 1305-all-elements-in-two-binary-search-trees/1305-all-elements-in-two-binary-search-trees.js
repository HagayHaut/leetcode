/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = function(root1, root2) {
    const arr1 = [],
          arr2 = [],
          merged = [];
    
    let i = 0,
        j = 0;
    
    // in order dfs on each
    const dfs = (node, n) => {
        if (!node) return;
        
        dfs(node.left, n);
        if (n === 1) arr1.push(node.val)
        else arr2.push(node.val)
        dfs(node.right, n);
    }
    
    dfs(root1, 1);
    dfs(root2, 2)
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else {
            merged.push(arr2[j]);
            j++;
        };
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    };
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    };
    
    // console.log({merged, arr1, arr2})
    return merged;
};
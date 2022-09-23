# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer} k
# @return {Integer}
def kth_smallest(root, k)
    data = []
    
    dfs = -> (node, data, k) {
        return if data.size == k || !node
        
        dfs.call node.left, data, k
        data << node.val
        dfs.call node.right, data, k
    }
    
    dfs.call root, data, k
    
    data[k-1]
end
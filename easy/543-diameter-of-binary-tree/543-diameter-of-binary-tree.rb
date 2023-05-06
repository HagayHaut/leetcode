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
# @return {Integer}
def diameter_of_binary_tree(root)
    res = 0
    
    dfs = -> (node) do 
        return 0 if !node
        
        l = dfs.call node.left
        r = dfs.call node.right
        res = [res, l + r].max
        
        1 + [l, r].max
    end
    
    dfs.call root
    
    res
end
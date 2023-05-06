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
# @return {String[]}
def binary_tree_paths(root)
    dfs root, res = [], []
    res
end

def dfs(node, res, path)
    return res << [*path, node.val].join('->') if (!node.left && !node.right)
    
    dfs node.left, res, [*path, node.val] if node.left
    dfs node.right, res, [*path, node.val] if node.right
end
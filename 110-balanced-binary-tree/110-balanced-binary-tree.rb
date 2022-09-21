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
# @return {Boolean}
def is_balanced(root)
    dfs(root)[0]
end

def dfs(node)
    return [true, 0] if !node
    
    left = dfs(node.left)
    right = dfs(node.right)
    balanced = left[0] && right[0] && (left[1] - right[1]).abs < 2
    
    [balanced, 1 + [left[1], right[1]].max]
end
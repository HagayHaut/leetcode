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
# @return {Integer[][]}
def level_order(root)
    return [] if !root
    q = [root]
    levels = []
    
    while q.size > 0 do 
        level = []
        q.size.times do 
            node = q.shift
            level.push node.val
            q.push << node.left if node.left
            q.push << node.right if node.right
        end
        levels << level
    end
    
    levels
end
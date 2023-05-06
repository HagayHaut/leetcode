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
def level_order_bottom(root)
    res = []
    return res if !root
    q = Queue.new
    q << root
    
    while q.size > 0 do 
        level = []
        q.size.times do 
            node = q.pop
            level << node.val
            q << node.left if node.left
            q << node.right if node.right
        end
        res << level
    end
    
    res.reverse
end
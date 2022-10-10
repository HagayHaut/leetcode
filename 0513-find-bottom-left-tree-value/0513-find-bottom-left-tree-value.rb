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
def find_bottom_left_value(root)
    row = []
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
        row = level
    end
    
    row[0]
end
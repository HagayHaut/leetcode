# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {TreeNode} p
# @param {TreeNode} q
# @return {TreeNode}
def lowest_common_ancestor(root, p, q)
    curr = root
    
    while curr do  
        if curr.val < p.val && curr.val < q.val
            curr = curr.right
        elsif curr.val > p.val && curr.val > q.val
            curr = curr.left
        else
            return curr
        end
    end
end
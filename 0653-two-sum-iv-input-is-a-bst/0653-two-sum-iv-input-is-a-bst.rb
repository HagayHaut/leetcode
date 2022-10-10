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
# @return {Boolean}
def find_target(root, k)
    seen = {}
    dfs = -> (node) {
        return false if !node 
        return true if seen[(k - node.val).to_s]
        seen[node.val.to_s] = true
        return dfs.call(node.left) || dfs.call(node.right)
    }
    dfs.call root
end
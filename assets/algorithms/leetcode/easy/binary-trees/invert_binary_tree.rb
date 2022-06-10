# INVERT A BINARY TREE

# Given the root of a binary tree, invert the tree, and return its root.

# Example 1:

#          1                                   1
#
#     2         7           ===>          7        2
#         
# 1     3     6     9                 9     6     3      1

# Input: root = [4,2,7,1,3,6,9]
# Output: [4,7,2,9,6,3,1]



# Example 2:
# Input: root = [2,1,3]
# Output: [2,3,1]



# Example 3:
# Input: root = []
# Output: []
 

# Constraints:

# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100






# my solution 
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
# @return {TreeNode}
def invert_tree(root)
    if root
        swap_nodes root
        invert_tree root.left
        invert_tree root.right
    end
    root
end

def swap_nodes root
    right = root.right
    root.right = root.left
    root.left = right
end
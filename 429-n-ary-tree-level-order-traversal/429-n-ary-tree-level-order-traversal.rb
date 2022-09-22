# Definition for a Node.
# class Node
#     attr_accessor :val, :children
#     def initialize(val)
#         @val = val
#         @children = []
#     end
# end

# @param {Node} root
# @return {List[List[int]]}
def level_order(root)
    res = []
    return res if !root
    
    q = Queue.new
    q << root
    
    while !q.empty? do 
        level = []
        
        q.size.times do 
            node = q.pop
            level << node.val
            node.children.each { |c| q << c }
        end
        
        res << level
    end
    
    res
end
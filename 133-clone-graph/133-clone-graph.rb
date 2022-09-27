# Definition for a Node.
# class Node
#     attr_accessor :val, :neighbors
#     def initialize(val = 0, neighbors = nil)
#		  @val = val
#		  neighbors = [] if neighbors.nil?
#         @neighbors = neighbors
#     end
# end

# @param {Node} node
# @return {Node}
def cloneGraph(node)
    return node if !node
    dfs node, map = [nil] * 100
    map[node.val]
end

def dfs(node, map)
    return map[node.val] if map[node.val]
    
    copy = Node.new node.val
    map[node.val] = copy
    node.neighbors.each do |neighbor|
        copy.neighbors << dfs(neighbor, map)
    end
    copy
end
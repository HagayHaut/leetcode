class TrieNode
   attr_accessor :children, :is_word 
    
   def initialize()
       @children = {}
       @is_word = false
   end
end

class Trie
    def initialize()
        @root = TrieNode.new
    end


=begin
    :type word: String
    :rtype: Void
=end
    def insert(word)
        curr = @root
        word.each_char do |c|
            curr.children[c] = TrieNode.new if !curr.children[c]
            curr = curr.children[c]
        end
        curr.is_word = true
    end


=begin
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        curr = @root
        word.each_char do |c|
            return false if !curr.children[c]
            curr = curr.children[c]
        end
        curr.is_word
    end


=begin
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix)
        curr = @root
        prefix.each_char do |c|
            return false if !curr.children[c]
            curr = curr.children[c]
        end
        true
    end


end

# Your Trie object will be instantiated and called as such:
# obj = Trie.new()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.starts_with(prefix)
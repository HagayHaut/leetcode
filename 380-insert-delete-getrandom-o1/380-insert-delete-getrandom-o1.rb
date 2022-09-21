class RandomizedSet
    
    attr_accessor :map, :arr, :len
    
    def initialize()
        @map = {}
        @arr = []
        @length = 0
    end


=begin
    :type val: Integer
    :rtype: Boolean
=end
    def insert(val)
        if @map.key? val
            false
        else
            @map[val] = @length
            @arr.push(val)
            @length += 1
            true
        end
    end


=begin
    :type val: Integer
    :rtype: Boolean
=end
    def remove(val)
        if @map.key? val
            idx = @map[val]
            temp = @arr[idx]
            @arr[idx] = arr[-1]
            @arr.pop
            @map[arr[idx]] = idx
            @map.delete val
            @length -= 1
            true
        else
            false 
        end
    end


=begin
    :rtype: Integer
=end
    def get_random()
        @arr[rand(0..@length - 1)]
    end


end

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet.new()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.get_random()
# @param {String} s
# @return {Integer}

def length_of_longest_substring(s)
    set = [].to_set
    l = 0
    r = 0
    result = 0
    
    while r < s.length do
        if set.include? s[r]
            while set.include? s[r] do 
                set.delete s[l]
                l += 1
            end
        end
        set.add s[r]
        r += 1
        result = [result, set.size].max
    end
    
    result
end
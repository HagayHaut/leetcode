# @param {String} s
# @return {String}
def remove_duplicates(s)
    stack = [s[0]]
    
    s[1..].each_char do |c|
        if c == stack.last
            stack.pop
        else
            stack << c
        end
    end
    
    stack.join
end
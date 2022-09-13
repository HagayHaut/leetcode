# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    return false if x < 0
    
    div = 1
    while x >= div*10 do
       div *= 10 
    end
    
    while x != 0 do
        l = x / div
        r = x % 10
        return false if l != r
        x = (x % div) / 10 
        div /= 100
    end
    
    true
end
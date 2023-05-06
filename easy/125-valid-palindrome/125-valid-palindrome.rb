# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    alphanumeric = s.gsub(/([^\w]|_)/, '').downcase
    p alphanumeric
    l = 0
    r = alphanumeric.length - 1
    while l < r do 
        return false if alphanumeric[l] != alphanumeric[r]
        l += 1
        r -= 1
    end
    true
end
# @param {String} s
# @return {String}
def longest_palindrome(s)
    res = ''
    resLen = 0
    (0..s.length-1).each do |i|
        # odd length
        l, r = i, i
        while l >= 0 && r < s.length && s[l] == s[r]
           if (r - l + 1) > resLen
               res = s[l..r]
               resLen = r - l + 1
           end
           l -= 1
           r += 1
        end
        # even length
        l, r = i, i+1
        while l >= 0 && r < s.length && s[l] == s[r]
           if (r - l + 1) > resLen
               res = s[l..r]
               resLen = r - l + 1
           end
           l -= 1
           r += 1
        end
    end
    res
end
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    freq = {}
    s.each_char { |c| freq[c] = (freq[c] || 0) + 1}
    t.each_char do |c|
        return false if !freq[c] 
        freq[c] -= 1
    end
    freq.values.all? { |count| count == 0 }
end
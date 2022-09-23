# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    return [] if digits.length == 0
    
    # map digits to their chars
    phone = "- - abc def ghi jkl mno pqrs tuv wxyz".split
    # group possibilities per index in subarrays
    charsets = digits.chars.map { |d| phone[d.to_i].chars }
    # ruby magic to get all combinations between two arrays
    [''].product(*charsets).map(&:join)
end
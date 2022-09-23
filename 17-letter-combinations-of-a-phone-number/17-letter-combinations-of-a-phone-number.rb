# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    return [] if digits.length == 0
    # map digits to their chars
    phone = "- - abc def ghi jkl mno pqrs tuv wxyz".split.map { |s| s.split(//) }
    res = []
    backtrack '', phone, digits, res
    res    
end

def backtrack(cur, phone, digits, res)
    return res << cur if cur.length == digits.length
    choices = phone[digits[cur.length].to_i]
    choices.each { |c| backtrack cur + c, phone, digits, res }
end


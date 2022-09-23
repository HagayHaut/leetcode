# @param {String} s
# @return {Integer}
def roman_to_int(s)
    map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    res = map[s[-1].to_sym]
    0.upto(s.length - 2) do |i|
        cur = map[s[i].to_sym]
        nxt = map[s[i + 1].to_sym]
        res += cur < nxt ? -cur : cur
    end
    res
end
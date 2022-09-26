# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
    offset = 'A'.ord - 1
    res = 0
    0.upto(column_title.size - 1) do |i|
        char = column_title[-1 - i]
        char_val = char.ord - offset
        res += 26**i * char_val
    end
    res
end
# @param {String} text
# @return {String}
def reorder_spaces(text)
    og_len = text.size
    words = text.scan /[a-z]+/
    num_spaces = og_len - words.join.size
    return words[0] if num_spaces == 0
    return words[0] + ' ' * num_spaces if words.size == 1
    res = words.join(' ' * (num_spaces / (words.size - 1)))
    remainder = num_spaces % (words.size - 1)
    res += ' ' * remainder
end
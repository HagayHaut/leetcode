# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    words = s.scan /\w+/
    words[-1].size
end
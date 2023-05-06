# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    n_len = needle.size
    h_len = haystack.size
    
    (0..(h_len - n_len)).each do |i|
        return i if haystack[i...i+n_len] == needle
    end
    
    -1
end
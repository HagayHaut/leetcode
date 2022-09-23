# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    prefix = ''
    strs[0].each_char.with_index do |char, i|
        strs.each { |str| return prefix if str[i] != char}
        prefix += char
    end
end
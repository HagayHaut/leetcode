# LONGEST COMMON PREFIX 
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
 

# Constraints:

# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lower-case English letters.






# my solution 
def longest_common_prefix(strs)
    prefix = ''
    strs[0].split(//).each_with_index do |char, i|
         is_prefix = true
         strs.each do |word|
            if word[i] != char
                is_prefix = false
                return prefix
            end
         end
        prefix += char if is_prefix
    end
    prefix
end
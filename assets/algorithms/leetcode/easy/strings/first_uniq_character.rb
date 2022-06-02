# Given a string s, find the first non-repeating character in it
# and return its index. If it does not exist, return -1.

 

# Example 1:

# Input: s = "leetcode"
# Output: 0
# Example 2:

# Input: s = "loveleetcode"
# Output: 2
# Example 3:

# Input: s = "aabb"
# Output: -1
 

# Constraints:

# 1 <= s.length <= 105
# s consists of only lowercase English letters.






# my solution
def first_uniq_char(s)
    uniq = s.split(//).find {|x| s.count(x) == 1 }
    idx = s.split(//).find_index(uniq)
    idx ? idx : -1
end
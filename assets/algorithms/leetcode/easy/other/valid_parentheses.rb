# VALID PARENTHESES
# Given a string s containing just the characters '(', ')', '{', '}',
# '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.




# my solution 
def is_valid(s)
    brackets = '{}()[]'
    stack = []
    s.split(//).each do |bracket|
        bracket_index = brackets.index bracket
        if bracket_index % 2 == 0
            stack << bracket_index + 1
        else
            return false if stack.pop != bracket_index
        end
    end
    stack.size == 0
end
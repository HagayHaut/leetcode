# @param {String} s
# @return {Boolean}
def is_valid(s)
    brackets = {'{' => '}', '[' => ']', '(' => ')' }
    stack = []
    s.each_char do |bracket|
        if brackets.key? bracket
            stack << brackets[bracket]
        else
            return false if stack.pop != bracket
        end
    end
    stack.size == 0
end
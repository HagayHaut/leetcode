# Simple string characters
# In this Kata, you will be given a string and your task will be
# to return a list of ints detailing the count of uppercase letters,
# lowercase, numbers and special characters, as follows.

# Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
# --the order is: uppercase letters, lowercase, numbers and special characters.





# my solution
def solve s
    nums = s.scan(/\d/).size
    up = s.scan(/[A-Z]/).size
    down = s.scan(/[a-z]/).size
    char = s.scan(/[\W_]/).size
    [up,down,nums,char]
end



# other solutions
def solve(string)
    ['A-Z','a-z','0-9','^A-Za-z0-9'].map { |range| string.count(range) }
end


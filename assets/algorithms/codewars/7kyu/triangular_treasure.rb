# TRIANGULAR TREASURE

# Triangular numbers are so called because of the equilateral
# triangular shape that they occupy when laid out as dots. i.e.

# 1st (1)   2nd (3)    3rd (6)
# *          **        ***
#            *         **
#                      *
# You need to return the nth triangular number.
# You should return 0 for out of range values:

# For example: (Input --> Output)

# 0 --> 0
# 2 --> 3
# 3 --> 6
# -10 --> 0




# my solution 
def triangular( n )
    sum = 0
    (1..n).each { |i| sum += i}
    sum
end

# better solution, didn't know you can use reduce on range
def triangular(n)
    (1..n).reduce(0,&:+)
end
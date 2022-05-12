# Convert number to reversed array of digits
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Example:
# 348597 => [7,9,5,8,4,3]
# 0 => [0]






# my solution
def digitize(n)
    n.to_s.split(//).map(&:to_i).reverse
end


def digitize(n)
    n.digits  
end


# better solution

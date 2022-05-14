#  Narcissistic Numbers

#  A Narcissistic Number is a number of length n in which the sum
# of its digits to the power of n is equal to the original number.
# If this seems confusing, refer to the example below.

# Ex: 153, where n = 3 (number of digits in 153)
# 13 + 53 + 33 = 153

# Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool)
# which returns whether or not i is a Narcissistic Number.





# my solution 
def is_narcissistic(n)
    n.digits.map {|d| d**n.to_s.length }.sum == n ? true : false
end

# other solutions
def is_narcissistic(n)
    ds = n.digits
    ds.map{ |d| d ** ds.size }.sum == n
end

def is_narcissistic(n)
    n == n.digits.map { |d| d**n.digits.size } .sum
end
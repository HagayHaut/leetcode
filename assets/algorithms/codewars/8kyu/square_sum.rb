# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.






# my solution
def squareSum(numbers)
    numbers.map {|n| n**2}.reduce(:+)
end




# other solutions
def squareSum(numbers)
    numbers.sum {|x| x * x}  
end

def squareSum(numbers)
    numbers.reduce { |s, n| s+=n**2 }
end
# ALGORITHM SOLUTIONS IN RUBY

# remove multiples of 13
# remvoe_13s([0,2,13,24,11,26])
# >> [2,24,11]
def no_thirteen(arr) 
    result = []
    arr.each do |n|
        if n % 13 != 0
            result.push(n)
        end
    end
    return result
end

# sum all odd integers of array
def sum_odds(arr)
    odds = arr.select { |n| n.odd? }
    return odds.reduce(0) { |pre,cur| pre + cur }
end

# sum array
def sum_arr(arr) 
    arr.reduce(0) { |pre,cur| pre + cur }
end

# count primes less than input
# count_primes 10
# >> 4
require 'prime'
def count_primes(n)
    count = 0
    for i in 1..n-1
        if Prime.prime?(n)
            count += 1
        end
    end
    return count 
end




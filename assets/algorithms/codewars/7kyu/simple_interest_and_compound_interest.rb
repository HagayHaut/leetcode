# Simple Interest and Compound Interest

# my solution (just the formula)
def interest(p,r,n)
    [ (p * (1 + r * n)).round, (p * (1 + r) ** n).round ]
end
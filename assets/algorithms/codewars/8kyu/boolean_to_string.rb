# Implement a function which convert the given boolean value into its string representation.

# Note: Only valid inputs will be given






# my solution
def boolean_to_string(b)
    b ? "true" : "false"
end




# better solutions
def boolean_to_string(b)
    b.to_s
end

def boolean_to_string(b)
    b.inspect
end
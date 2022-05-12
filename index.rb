def calculator(n1,n2,op)
    if op == '+'
        return n1 + n2
    elsif op == '-'
        return n1 - n2
    elsif op == '*'
        return n1 * n2
    elsif op == '/'
        return n1 / n2
    elsif op == '**'
        n1**n2
    end
end


puts calculator(3,3,'**')
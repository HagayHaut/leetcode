# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    rows = {}
    cols = {}
    squares = {}
    
    board.each_with_index do |row, r|
       row.each_with_index do |num, c|
           next if num == '.'
           
           s = "#{r / 3}#{c / 3}"
           rows[r] ||= Set.new
           cols[c] ||= Set.new
           squares[s] ||= Set.new
           
           if rows[r].include?(num) || cols[c].include?(num) || squares[s].include?(num)
               return false
           end
           
           rows[r].add(num)
           cols[c].add(num)
           squares[s].add(num)
       end
    end
    
    true
end
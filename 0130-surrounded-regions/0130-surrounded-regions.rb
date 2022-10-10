# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve(board)
    m = board.size
    n = board[0].size
    safe = Set.new
    dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    
    0.upto(m - 1) do |r|
        mark_safe(board, safe, r, 0, m, n, dirs) if board[r][0] == 'O' 
        mark_safe(board, safe, r, n - 1, m, n, dirs) if board[r][n - 1] == 'O' 
    end
    
    0.upto(n - 1) do |c|
        mark_safe(board, safe, 0, c, m, n, dirs) if board[0][c] == 'O' 
        mark_safe(board, safe, m - 1, c, m, n, dirs) if board[m - 1][c] == 'O' 
    end
    
    0.upto(m - 1) do |r|
        0.upto(n - 1) do |c|
            board[r][c] = 'X' if board[r][c] == 'O' && !safe.include?([r, c]) 
        end
    end
end

def mark_safe(board, safe, r, c, m, n, dirs)
    if is_inbounds(r,c,m,n) && !safe.include?([r,c]) && board[r][c] == 'O'
        safe.add [r,c]
        dirs.each { |dr,dc| mark_safe board, safe, r+dr,c+dc, m,n,dirs }
    end
end

def is_inbounds(r,c,m,n)
    r >= 0 && c >= 0 && r < m && c < n 
end


# @param {Character[][]} grid
# @return {Integer}
def num_islands(grid)
    dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    islands = 0
    grid.each_with_index do |row,r|
        row.each_with_index do |x,c|
            if x == '1'
                islands += 1
                flood grid, dirs, r, c
            end
        end
    end
    islands
end

def flood(grid,dirs,r,c)
    if is_valid(grid,r,c) && grid[r][c] == '1'
        grid[r][c] = '0'
        dirs.each { |dr,dc| flood(grid,dirs,r+dr,c+dc)}
    end
end

def is_valid(grid,r,c)
    r >= 0 && c >= 0 && r < grid.size && c < grid[0].size 
end
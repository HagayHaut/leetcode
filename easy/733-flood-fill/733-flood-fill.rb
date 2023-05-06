# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
    curr_color = image[sr][sc]
    image[sr][sc] = color
    return image if curr_color == color
    
    flood_fill(image,sr-1,sc, color) if sr > 0 && image[sr-1][sc] == curr_color
    flood_fill(image,sr+1,sc, color) if sr < image.length - 1 && image[sr+1][sc] == curr_color
    flood_fill(image,sr,sc-1, color) if sc > 0 && image[sr][sc-1] == curr_color
    flood_fill(image,sr,sc+1, color) if sc < image[0].length - 1 && image[sr][sc+1] == curr_color
    
    image
end
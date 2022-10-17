/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const rows = {},
          cols = {},
          boxes = {};
    
    const invalid = (r, c, b, v) => {
        return rows[r].has(v)|| 
               cols[c].has(v) ||
               boxes[b].has(v);
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const b = `${~~(r/3)}${~~(c / 3)}`,
                  val = board[r][c];
            
            if (val === '.') continue;
            
            rows[r] ||= new Set();
            cols[c] ||= new Set();
            boxes[b] ||= new Set();
            
            if (invalid(r, c, b, val)) return false;
            
            rows[r].add(val);
            cols[c].add(val);
            boxes[b].add(val);
        }
    }
    
    return true;
};
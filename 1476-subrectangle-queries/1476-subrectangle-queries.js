/**
 * @param {number[][]} rectangle
 */


/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */


/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */


/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }
    
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let row = row1; row <= row2; row++) {
            for (let col = col1; col <= col2; col++) {
                this.rectangle[row][col] = newValue;
            }
        }
    }
    
    getValue(row, col) {
        return this.rectangle[row][col];
    }
}
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const q = [];
    const map = {};
    employees.forEach(e => {
        map[e.id] = e;
    });
    q.push(id);
    let result = 0;
    while (q.length) {
        const emp = q.shift();
        result += map[emp].importance;
        map[emp].subordinates.forEach(s => q.push(s));
    }
    return result;
};
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**6
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = {};
    employees.forEach(e => map[e.id] = e);
    let result = 0;
    const dfs = emp_id => {
        result += map[emp_id].importance;
        map[emp_id].subordinates.forEach(s => dfs(s));
    }
    dfs(id);
    return result;
};
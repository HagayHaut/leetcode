/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
const displayTable = function(orders) {
    const tables = {};
    const dishes = new Set();
    orders.forEach(([_, tableId, dish]) => {
        tables[tableId] = tables[tableId] || {};
        tables[tableId][dish] = ++tables[tableId][dish] || 1;
        dishes.add(dish);
    })
    const res = [Array.from(dishes).sort()];
    res[0].unshift('Table');
    for (const tableId in tables) {
        const row = [tableId];
        for (let i = 1; i < res[0].length; i++) {
            const dish = res[0][i];
            const orderCount = tables[tableId][dish];
            row.push(orderCount ? `${orderCount}` : '0');
        }
        res.push(row);
    }
    
    return res;
};
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function(logs, k) {
   const userMap = {},
         uamMap = {},
         result = Array(k).fill(0);
    
    logs.forEach(([id, minute]) => {
        userMap[id] = userMap[id] || new Set();
        userMap[id].add(minute);
    })
    
    for (const key in userMap) {
        result[userMap[key].size-1]++;
    }
    
    return result;
};

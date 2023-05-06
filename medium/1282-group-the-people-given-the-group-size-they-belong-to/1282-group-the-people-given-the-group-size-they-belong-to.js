/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
    const map = {},
          result = [];
    groupSizes.forEach((size, id) => {
        map[size] = map[size] || [];
        map[size].push(id);
    })
    for (const size in map) {
        if (size === `${map[size].length}`) {
            result.push(map[size]);
        }
        else {
            let group = [];
            map[size].forEach((id) => {
                group.push(id);
                if (`${group.length}` === size) {
                    result.push(group);
                    group = [];
                }
            })
        }
    }
    return result;
};
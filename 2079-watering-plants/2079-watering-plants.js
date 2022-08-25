/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function(plants, capacity) {
    let steps = 0,
        bucket = capacity,
        i = 0;
    
    while (i < plants.length) {
        if (plants[i] > bucket) {
            steps += 2 * i;
            bucket = capacity;
            continue;
        }

        bucket -= plants[i];
        i++;
        steps++;
    }
    
    return steps;
};
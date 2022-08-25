/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
    let result = '';
    
    let i = 0;
    
    while (i < command.length) {
        if (command[i] === 'G') result += command[i++];
        else {
            if (command[i+1] === ')') {
                result += 'o';
                i += 2;
            } else {
                result += 'al';
                i += 4;
            }
        }
    }
    
    return result;
};
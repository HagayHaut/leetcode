/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
    const items = s.split(' '),
          result = Array(items.length);
    
    items.forEach(item => {
        result[parseInt(item[item.length - 1]) - 1] = item.slice(0,-1);
    })
    
    return result.join(' ');
};
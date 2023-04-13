/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = (obj, classFunction) => {
    if (obj === null || obj === undefined || typeof classFunction !== 'function')
        return false;
    
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
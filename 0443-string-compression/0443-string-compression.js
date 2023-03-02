/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
    let i = 0, res = 0, n = chars.length;
    while (i < n) {
        let groupLen = 1;
        while (i + groupLen < n && chars[i + groupLen] === chars[i]) {
            groupLen++;
        }
        chars[res] = chars[i];
        res++;
        if (groupLen > 1) {
             for (const c of `${groupLen}`) chars[res++] = c;
        }
        i += groupLen;
    }
    return res;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const hashst = {}
    const hashts = {}
    for (let i=0; i<s.length; i++){
        if (hashst[s[i]] || hashts[t[i]]){
            if(!(hashst[s[i]] == t[i] && hashts[t[i]] == s[i])){
                return false
            }
        } else {
            hashst[s[i]] = t[i]
            hashts[t[i]] = s[i]
        }
    }
    return true
};







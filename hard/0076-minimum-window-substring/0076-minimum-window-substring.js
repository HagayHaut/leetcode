/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  const map  = {};
  const sLen = s.length;
  const tLen = t.length;
  let count  = tLen; 
  let min    = Infinity;
  let head   = 0;
  let left   = 0;
  let right  = 0;

  if (!sLen || !tLen) return '';

  for (let i = 0; i < tLen; i++) {
    if (map[t[i]] === undefined) map[t[i]] = 1;
    else map[t[i]]++;
  }

  while (right < sLen) {
    if (map[s[right]] !== undefined) {
      if (map[s[right]] > 0) count--;
      map[s[right]]--;
    }

    right++;

    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        head = left;
      }

      if (map[s[left]] !== undefined) {
        if (map[s[left]] === 0) count++;
        map[s[left]]++;
      }

      left++;
    }
  }

  return min === Infinity ? '' : s.substr(head, min);
};
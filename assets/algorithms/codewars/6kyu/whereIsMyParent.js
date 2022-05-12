// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. 
// All are having great fun on the dance floor when suddenly all the lights went out.
// It's a dark night and no one can see each other.
// But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// my solution 
function findChildren(dancingBrigade) {
    const mothers = dancingBrigade.match(/[A-Z]/g).sort();
    const children = dancingBrigade.split('').filter(c => c !== c.toUpperCase()).sort()
    const result = [];
    mothers.forEach(mom => {
      result.push(mom);
      const kids = children.filter(kid => kid.toUpperCase() === mom)
      result.push(...kids)
    })
    return result.join('')
}


// better solution 
const findChildren = dancingBrigade =>
  [...dancingBrigade].sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`})).join(``);
  
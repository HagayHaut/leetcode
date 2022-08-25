/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  
  const adjList = edges.reduce((acc, [u, v]) => {
    acc[u] = acc[u] || []
    acc[v] = acc[v] || []
    acc[u].push(v)
    acc[v].push(u)
    return acc
  }, [])
  if (!edges.length) {
    return [0]
  }
  let current = []
  for (let i = 0; i < n; i++) {
    if ((adjList[i] || []).length === 1) {
      current.push(i)
    }
  }
  while (current.length > 0) {
    const next = []
    current.forEach((node) => {
      if (adjList[node].length > 0) {
        const nextNode = adjList[node].pop()
        adjList[nextNode] = adjList[nextNode].filter(x => x !== node)
        if (adjList[nextNode].length === 1) {
          next.push(nextNode)
        }
      }
    })
    if (next.length === 0) {
      return current
    }
    current = next
  }
  return []
}
    

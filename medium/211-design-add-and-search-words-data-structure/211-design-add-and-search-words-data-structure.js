class Node {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new Node();
    }
    
    addWord(word) {
        let curr = this.root;
        
        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new Node();
            }
            curr = curr.children[c];
        }
        curr.endOfWord = true;
    }
    
    // will be recursive
    search(word) {
        return this.dfs(word, 0)
    }
    
    dfs(word, i, node = this.root) {
        if (i === word.length) {
            return node.endOfWord;
        }
        
        const c = word[i];
        if (c === '.') {
            for (const key in node.children) {
                if (this.dfs(word, i + 1, node.children[key])) {
                    return true;
                }
            }
        }
        else if (node.children[c]) {
            return this.dfs(word, i + 1, node.children[c]);
        } 
        
        return false;
    }
};

/** 
 * @param {string} word
 * @return {void}
 */


/** 
 * @param {string} word
 * @return {boolean}
 */


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
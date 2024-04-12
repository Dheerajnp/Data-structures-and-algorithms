class TrieNode {
    constructor() {
      this.childrens = {};
      this.endOfWord = false;
    }
  }
 
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    isValidChar(char){
        return /^[a-zA-Z]+$/.test(char)
    }
    insertWord(word) {
      let currentNode = this.root;
 
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if(!this.isValidChar(char)){
            return "the entered world contains other words"
        }
        if (!currentNode.childrens[char]) {
          currentNode.childrens[char] = new TrieNode();
        }
        currentNode = currentNode.childrens[char];
      }
 
      currentNode.endOfWord = true;
    }

    startsWith(prefix){
        let currentNode = this.root; // Starts at the root of the Trie.
        for(let i=0; i<prefix.length; i++){ // Iterates over each character in the prefix.
            const char = prefix[i] // Current character to check.
            if(!currentNode.childrens[char]){ // If the character node doesn't exist,
                return false; // the prefix is not in the Trie.
            }
            currentNode = currentNode.childrens[char] // Move to the next node.
        }
        return true // Returns true if the prefix exists in the Trie.
    }
  
    }
 
  // Example Usage:
 
  let trie = new Trie();
  trie.insertWord("apple");
  trie.insertWord("app");
//   trie.insertWord('ass12')
  console.log(trie.insertWord('ass12'));
  console.log(trie.startsWith('appl'));
  console.log(JSON.stringify(trie.root, null, 2));
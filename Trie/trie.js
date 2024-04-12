class TrieNode {
    constructor() {
      this.childrens = {}; // Initializes an empty object to store child nodes.
      this.endOfWord = false; // Flag to mark the end of a word.
    }
}

class Trie {
    constructor() {
      this.root = new TrieNode(); // Creates a root node for the Trie.
    }
    isValidChar(char){
        return /^[a-zA-Z]+$/.test(char) // Checks if the character is a valid alphabet letter.
    }
    insertWord(word) {
      let currentNode = this.root; // Starts at the root of the Trie.
  
      for (let i = 0; i < word.length; i++) { // Iterates over each character in the word.
        const char = word[i]; // Current character to insert.
        if(!this.isValidChar(char)){ // Validates the character.
            return "the entered world contains other words" // Returns error if invalid.
        }
        if (!currentNode.childrens[char]) { // If the character node doesn't exist,
          currentNode.childrens[char] = new TrieNode(); // create a new TrieNode.
        }
        currentNode = currentNode.childrens[char]; // Move to the next node.
      }
  
      currentNode.endOfWord = true; // Marks the end of the word.
    }

    search(word){
        let currentNode = this.root // Starts at the root of the Trie.
        for(let i= 0; i<word.length; i++){ // Iterates over each character in the word.
            const char = word[i]; // Current character to search for.
            if(!currentNode.childrens[char]){ // If the character node doesn't exist,
               return false // the word is not in the Trie.
            }
            currentNode = currentNode.childrens[char]; // Move to the next node.
        }
        return currentNode.endOfWord // Returns true if it's the end of the word.
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
    remove(word){
        this._remove(this.root, word, 0) // Calls the helper function to remove a word.
    }
    _remove(node, word, index) {
        if (index === word.length) { // If the end of the word is reached,
          if (!node.endOfWord) { // and it's not marked as a word,
            return false; // the word is not in the Trie.
          }
          node.endOfWord = false; // Unmark the end of the word.
          return Object.keys(node.childrens).length === 0; // Check if node can be deleted.
        }
      
        const char = word[index]; // Current character to delete.
        if (!node.childrens[char]) { // If the character node doesn't exist,
          return false; // the word is not in the Trie.
        }
      
        const shouldDelete = this._remove(node.childrens[char], word, index + 1); // Recursively call remove.
        if (shouldDelete) { // If the child node should be deleted,
          delete node.childrens[char]; // delete the character node.
          return Object.keys(node.childrens).length === 0; // Check if node can be deleted.
        }
        
        return false; // Return false if the node should not be deleted.
      }

    }

// Example Usage:

let trie = new Trie(); // Creates a new Trie instance.
trie.insertWord("apple"); // Inserts the word 'apple' into the Trie.
trie.insertWord("app"); // Inserts the word 'app' into the Trie.
// trie.insertWord('ass12') // This line is commented out.
console.log(trie.insertWord('ass12')); // Tries to insert 'ass12' and logs the result.
console.log(trie.startsWith('appl')); // Checks if 'appl' is a prefix in the Trie and logs the result.
console.log(JSON.stringify(trie.root, null, 2)); // Logs the JSON representation of the Trie's root node.

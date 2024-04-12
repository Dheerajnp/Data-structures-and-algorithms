class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insertWord(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }

    removeWord(word) {
        this.delete(this.root, word, 0);
    }

    delete(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        const childNode = node.children[char];
        if (!childNode) {
            return false;
        }

        const shouldDeleteChild = this.delete(childNode, word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }
}

// Example Usage:

let trie = new Trie();
trie.insertWord("apple");
console.log(trie.search("apple")); // true
console.log(trie.startsWith("app")); // true
trie.removeWord("apple");
console.log(trie.search("apple")); // false

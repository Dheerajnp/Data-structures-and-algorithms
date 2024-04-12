class TrieNode{
    constructor(){
        this.childrens={};
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();

    }

    isValid(char){
        return /^[a-zA-Z]+$/.test(char);
    }

    insertWord(word){
        let currentNode = this.root;
        for(let i=0;i<word.length;i++){
            let char =word[i];
            if(!this.isValid(char)){
                return "Contains other than characters"
            }
            if(!currentNode.childrens[char]){
                currentNode.childrens[char]= new TrieNode();
            }
            currentNode = currentNode.childrens[char];
        }
        currentNode.endOfWord = true;
    }

    search(word){
        let currentNode = this.root;
        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!currentNode.childrens[char]){
                return false
            }
            currentNode=currentNode.childrens[char]
        }
        return currentNode.endOfWord;
    }

    startsWith(prefix){
        let currentNode=this.root;
        for(let i=0;i<prefix.length;i++){
            let char = prefix[i];
            if(!currentNode.childrens[char]){
                return false;
            }
            currentNode = currentNode.childrens[char]
        }
        return true;
    }
}

let trie = new Trie(); // Creates a new Trie instance.
trie.insertWord("apple"); // Inserts the word 'apple' into the Trie.
trie.insertWord("app"); // Inserts the word 'app' into the Trie.
// trie.insertWord('ass12') // This line is commented out.
console.log(trie.insertWord('ass12')); // Tries to insert 'ass12' and logs the result.
console.log(trie.startsWith('appl')); // Checks if 'appl' is a prefix in the Trie and logs the result.
console.log(JSON.stringify(trie.root, null, 2)); 
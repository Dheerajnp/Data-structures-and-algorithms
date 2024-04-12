class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(key, value) {
      const newNode = new Node(key, value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    find(key) {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
      return undefined;
    }
  
    remove(key) {
      if (!this.head) {
        return;
      }
      if (this.head.key === key) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let prev = null;
      while (current && current.key !== key) {
        prev = current;
        current = current.next;
      }
      if (current) {
        prev.next = current.next;
      }
    }
  }
  
  class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.buckets = new Array(size).fill(null).map(() => new LinkedList());
    }
  
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.size;
    }
  
    insert(key, value) {
      const index = this.hash(key);
      this.buckets[index].insert(key, value);
    }
  
    retrieve(key) {
      const index = this.hash(key);
      return this.buckets[index].find(key);
    }
  
    remove(key) {
      const index = this.hash(key);
      this.buckets[index].remove(key);
    }

    display() {
        for (let i = 0; i < this.size; i++) {
          const currentBucket = this.buckets[i];
          if (currentBucket.head) {
            let current = currentBucket.head;
            while (current) {
              console.log(`Key: ${current.key}, Value: ${current.value}`);
              current = current.next;
            }
          }
        }
      }
  }
  
  const myHashTable = new HashTable();
  
  myHashTable.insert("name", "John");
  myHashTable.insert("age", 25);
  myHashTable.insert("city", "New York");
  myHashTable.display();
  console.log(myHashTable.retrieve("name"));
  
  myHashTable.remove("age");
  myHashTable.display();
  console.log(myHashTable.retrieve("age"));
  
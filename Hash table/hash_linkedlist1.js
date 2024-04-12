class Node{
    consructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insert(key,value){
        const newNode = new Node(key, value);
        if(!this.head){
            this.head=newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(key){
        let current = this.head;
        while(current){
            if(current.key === key){
                return current.value;
            }
            current = current.naxt;
        }
        return undefined;
    }


    remove(key){
        if(!this.head){
            return null;
        }
        if(this.head.key === key){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while(current&&current.next !== key){
            prev = current;
            current = current.next;
        }
        if(current){
            prev.next = current.next;
        }
    }
}

class hashTable{
    constructor(size = 10){
        this.size = size;
        this.table = new Array(size).fill(null).map(()=>new LinkedList());
    }


    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total+=key.charCodeAt(i);
            
        }
        return total % this.size;
    }


    insert(key,value){
        let index = this.hash(key);
        this.table[index].insert(key,value);
    }


    search(key){
        let index = this.hash(key);
        return this.table[index].find(key);
    }
    remove(key){
        let index = this.hash(key);
        this.table[index].remove(key);
    }


    display(){
        for(let i = 0;i<this.table.length;i++){
            let currentBucket = this.table[i];
            if(currentBucket){
                let current = currentBucket.head;
                while(current){
                    console.log(`Key:${current.key}, Value:${current.value}`);
                    current = current.next
                }
            }
        }
    }
}
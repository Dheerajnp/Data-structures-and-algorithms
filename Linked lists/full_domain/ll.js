class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size===0;
    }

    size(){
        return this.size
    }

    prepend(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++;

    }

    append(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let last = this.head;
            while(last.next){
                last = last.next
            }
            last.next = newNode
            this.size++;
        }
    }

    insert(value,index){
        if(index<0||index>this.size){
            console.log("Size out of bounds")
            return
        }

        if(index===0){
            this.prepend(value)
        }else{
            
        let node = new Node(value);
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next; 
        prev.next = node;
        this.size++;
        }
    }

    print(){

        if(this.isEmpty()){
            console.log("Empty list");
        }else{
            let current = this.head;
        let listelements = ''
        while(current){
            listelements += `${current.value} `;
            current = current.next;
        }

        console.log(listelements);
        }
        
    }
    remove(index){
       if(index<0||index>this.size){
        console.log("Enter valid index to remove");
       }
       let removedNode;
       if(index===0){
        removedNode = this.head;
        this.head = removedNode.next;
       }else{
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
       }
       this.size--;
       return removedNode.value
    }
    reverse(){
        let current = this.head;
        let next = null;
        let prev = null
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}


const list = new linkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(100)
list.append(200);
list.insert(40,3);
list.insert(3000,6);
console.log(list.remove(3));
list.reverse();
list.print();
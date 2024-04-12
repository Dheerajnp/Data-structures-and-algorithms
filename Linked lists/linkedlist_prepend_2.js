class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }


    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){    // if  the  linked list is empty
            
            
            this.head=node; // place the new node as head
        
        
        }else{                  // if there are other nodes in the linked list
            
            node.next=this.head;  //place the next of the new node to the current head
            this.head=node;         //make the head as the new node

        }
        this.size++;        // increase the size
    }
    printList() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
    }
}


const list = new Linkedlist();
list.prepend(10);
list.prepend(20);
list.prepend(30);

list.printList();
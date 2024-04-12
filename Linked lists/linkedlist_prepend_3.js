class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
     printList(){
        if(this.isEmpty()){
            console.log("No value in linked list")
        }else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
       
    }
}


const list = new LinkedList();
list.printList();
list.prepend(10);
list.printList();
list.prepend(20);
list.prepend(30);

list.printList();
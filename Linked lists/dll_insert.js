class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(index,value){
        if(index<0||index>this.length){
            console.log("Invalid index");
            return
        }
        const node = new Node(value);
        if(this.length===0){
            this.head = node;
            this.tail = node;
        }else if(index === 0){
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }else if(index === this.length){
            node.prev=this.tail;
            this.tail.next = node;
            this.tail = node;
        }else{
            let curr = this.head;
            let i = 0;
            while(i<index - 1){
                curr = curr.next;
                i++;
            }
            node.prev = curr;
            node.next = curr.next;
            curr.next.prev = node;
            curr.next = node;
        }
        this.length++;
    }

    print(){
        if(this.length===0){
            console.log("no elements");
            return
        }else{
            let curr = this.head;
            let listElements =''
            while(curr){
                listElements+=`${curr.value} `
                curr = curr.next
            }
            console.log(listElements)
        }
    }


}

const dll =new DoublyLinkedList();
dll.print();
dll.insert(0,10);
dll.insert(1,20);
dll.insert(2,30);
dll.insert(3,40);
dll.print();

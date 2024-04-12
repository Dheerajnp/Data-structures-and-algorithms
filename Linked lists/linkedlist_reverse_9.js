class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }


    append(value) {
        const newNode = new Node(value);
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
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    reverse(){
      let prev=null;
      let next=null;
      let current=this.head;
      while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
      }
      this.head=prev;
    }


}




// Example usage:
const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(6);
linkedList.append(7);
linkedList.append(2);


console.log("Original Linked List:");
linkedList.printList();


linkedList.reverse();
console.log("\nReversed Linked List:");
linkedList.printList();

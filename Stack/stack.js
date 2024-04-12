class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class StackList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    sizes(){
        return this.size
    }
    isEmpty(){
        return (this.head==null)
    }
    push(val){
        const node = new Node(val);
       node.next=this.head;
       this.head=node;
       this.size++;
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        let removedVal = this.head.value
        this.head=this.head.next
        this.size--;
        return removedVal

    }
    peek(){
        return this.head.value;
    }
    print(){
        if(this.isEmpty()){
            return null
        }
        let curr= this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}






const stack = new StackList();
stack.push('1');
stack.push(2);
stack.push(23);
stack.push(456);
stack.push(78);
stack.push(9);
stack.print(); 
console.log("Size:",stack.sizes());
console.log("Peek:",stack.peek());
console.log("Pop:",stack.pop()) 
stack.print(); 
console.log("Size:",stack.size);
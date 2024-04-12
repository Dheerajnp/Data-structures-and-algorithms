class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size =0
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

  

    print(){
        let current = this.head;
        let listElements = '';
        while(current){
            listElements += `${current.value} `
            current = current.next;
        }
        console.log(listElements)
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let last = this.head;
            while(last.next){
                last = last.next;
            }
            last.next = node;

        }
        this.size++;
    }

    insert(value,index){
        if(index<0||index>this.size){
            console.log("Wrong index");
            return
        }
        if(index ===0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev =this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }


    remove(index){
        if(index<0||index>this.size){
            console.log("Invalid index:")
            return null;
        }
        let removedNode;
        if(index===0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removedNode=prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        console.log("removed data:",removedNode.value)
    }
}

const list = new LinkedList();
list.prepend(10);
list.append(20);
list.prepend(30);
list.insert(100,2);
list.print();
list.remove(0);
list.remove(0);
list.remove(0);
list.remove(0);
// list.print();
list.insert(10,0);
list.insert(20,0);
list.insert(30,0);
list.insert(40,0);
list.print()
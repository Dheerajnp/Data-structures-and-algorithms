class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
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
        node.next = this.head;
        this.head = node;
        this.size++;
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
     
    print(){
        let curr = this.head;
        let listElements = '';
        while(curr){
            listElements+=`${curr.value} `
            curr = curr.next;
        }
        console.log(listElements)
    }

    remove(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head;
            this.head = this.head.next;
            
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            
        }
        this.size--;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }else{
            let removedNode
            let prev = this.head;
            while(prev.next&&prev.next.value!==value){
                prev = prev.next;
            }
            if(prev.next){
                removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
            }
            return null;
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1;
        }else{
            let i=0;
            let curr = this.head;
            while(curr){
                if(curr.value===value){
                    return i;
                }
                curr = curr.next;
                i++;
            }
            return -1;
        }
    }

    insert(value,index){
        if(index<0||index>this.size){
            console.log("Wrong index");
            return
        }
        if(index===0){
            this.prepend(value);
        }
        else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            node.next=prev.next;
            prev.next=node;
            this.size++;
        }
    }
}


const list = new LinkedList();
list.insert(10,0)
list.insert(20,0)
list.insert(30,0)
list.insert(40,0)
list.insert(50,0)
list.print()
console.log(list.removeValue(10));
list.print()

console.log(list.search(20));
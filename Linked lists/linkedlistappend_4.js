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
        let current = this.head;
        let listelements = '';
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            while(current){
                listelements += `${current.value} `
                current = current.next;
            }
            console.log(listelements);
        }
        
    }

}


const list = new LinkedList();
list.print();
list.prepend(10);
list.prepend(20);
list.append(100);
list.print();
list.append(200);
list.prepend(30)


list.print();
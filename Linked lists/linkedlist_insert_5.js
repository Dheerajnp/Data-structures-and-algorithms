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

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            
            let  last = this.head;
            while(last.next){
                last=last.next;
            }
            last.next = node;
        }
        this.size++;
    }


    insert(value,index){
        if(index<0||index>this.size){
            console.log("Size exceeded")
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
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

}


const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(100)
list.append(200);
list.insert(40,3);
list.insert(3000,6)
list.print()
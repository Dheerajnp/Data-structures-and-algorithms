class BasicQueue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){


        if(this.isEmpty()){
            return null
        }
        this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        if(this.isEmpty()){
            return null
        }else{
            return this.items.length;
        }
    }
    print(){
        if(this.isEmpty()){
            return null
        }else{
           console.log("Printing Queue elements:");
           for (let i = 0; i < this.size(); i++) {
            console.log(this.items[i]);
        }
    }
    }
    peek(){
        if(this.isEmpty()){
            return null
         }else{
            return this.items[0]
          }


    }


}


const queue = new BasicQueue();
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(44)
queue.enqueue(34)
queue.enqueue(42)
queue.enqueue(41)
console.log('Size of the queue', queue.size())
queue.print()
console.log('Peek element in the queue', queue.peek())
queue.dequeue()
queue.print()
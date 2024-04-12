class Heap{
    constructor(){
        this.heap=[]
    }
    swap(index,parentIndex){
         [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
    }
    heapifyUp(){
        let index = this.heap.length-1;

        while(index>0){
            let parent = Math.floor(index/2)
            if(parent<this.heap.length && this.heap[parent]<this.heap[index]){
                this.swap(index,parent)
                index=parent
            }else{
                break
            }
        }
    }

    heapifyDown(index=0,n){
        let largest = index;
        let leftChild = 2* index+1;
        let rightChild = 2* index+2;
        if(leftChild<n && this.heap[leftChild]>this.heap[largest]){
            largest=leftChild
        }
        if(rightChild<n && this.heap[rightChild]>this.heap[largest]){
            largest = rightChild
        }
        if(largest!==index){
            this.swap(largest,index);
            this.heapifyDown(largest)
        }
    }
    insert(val){
        this.heap.push(val);
        this.heapifyUp()
    }
    isEmpty(){
        return this.heap.length===0
    }



    remove(){
        if(this.isEmpty()) throw new Error("Heap is empty")
        const max = this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop()
        this.heapifyDown();
        return max
    }
    Travresal(index=0){
        if(index<this.heap.length){
            this.Travresal(2*index+1);
            // console.log("Index at "+index+" "+this.heap[index]);
            console.log(this.heap[index]);
            this.Travresal(2*index+2)
        }
    }
    bulidMaxHeap(){
        for(let i=Math.floor((this.heap.length-1)/2);i>=0;i--){
            this.heapifyDown(i,this.heap.length)
        }
    }

    heapSort(){
        this.bulidMaxHeap()

       for(let i=this.heap.length-1;i>=0;i--){
        this.swap(0,i)
        this.heapifyDown(0,i)
       }
    }
}

const maxHeap = new Heap();
// 41,39,33,18,27,12
maxHeap.insert(41);
maxHeap.insert(39)
maxHeap.insert(33)
maxHeap.insert(18)
maxHeap.insert(27)
maxHeap.insert(12)
maxHeap.insert(55)
console.log(maxHeap);

console.log(maxHeap.remove());
console.log(maxHeap);
console.log(maxHeap.remove());
console.log(maxHeap);
// console.log(maxHeap.heap); // [20, 15, 10, 5]

// const maxElement = maxHeap.remove();
// console.log(maxElement); // 20
// console.log(maxHeap.heap); // [15, 5, 10]
// maxHeap.Travresal()
// // maxHeap.heapSort()
// // maxHeap.Travresal()
// console.log(maxHeap.heap);
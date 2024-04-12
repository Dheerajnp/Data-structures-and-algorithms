class Heap{
    constructor(){
        this.heap=[];
    }

    swap(index,parentIdx){
        [this.heap[index],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[index]];
    }


    isEmpty(){
        return this.heap===0;
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp()   
     }

     heapifyUp(){
        let index = this.heap.length - 1;
        let element = this.heap[index];

        while(index>0){
            let parentIdx = Math.floor((index-1)/2);
            let parent = this.heap[parentIdx];

            if(parent<=element)break;
            this.swap(index,parentIdx);
            index=parentIdx;
        }
     }

     remove(){
        if(this.isEmpty())return new Error("Heap is Empty");

        let max = this.heap[0];
        let end = this.heap.pop();
        this.heap[0]= end;
        this.heapifyDown(0,this.heap.length);
        return max;
     }


     heapifyDown(i=0,n){
        let largest = i;
        let left = i*2+1;
        let right = left +1;
        if(left<n&&this.heap[left]>this.heap[largest]){
            largest =left;
        }
        if(right<n&&this.heap[right]>this.heap[largest]){
            largest = right;
        }

        if(largest!==i){
            this.swap(largest,i);
            this.heapifyDown(largest,n);
        }
     }


     buildMaxHeap(){
        for(let i=Math.floor((this.heap.length-1)/2);i>=0;i--){
            this.heapifyDown(i,this.heap.length);
        }
     }

     heapSort(){
        this.buildMaxHeap();

        for(let i=this.heap.length-1;i>0;i--){
            this.swap(0,i);
            this.heapifyDown(0,i);
        }
     }

}
    class Heap{
        constructor(){
            this.heap=[];
        }

        isEmpty(){
            return this.heap.length===0;
        }

        insert(value){
            this.heap.push(value);
            this.heapifyUp();
        }


        swap(index, parentIndex) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        }


        heapifyUp(){
            let index = this.heap.length-1;
            let element = this.heap[index];

            while(index>0){
                let parentIdx = Math.floor((index-1)/2);
                let parent = this.heap[parentIdx];
                if (parent <= element) break;
                this.swap(index,parentIdx);
                index=parentIdx;
            }
        }


        remove(){
            if(this.isEmpty()) throw new Error("Heap empty")

            let min = this.heap[0];
            let end = this.heap.pop();
            this.heap[0]=end;
            this.heapifyDown(0,this.heap.length);
            return min;
        }


        heapifyDown(index=0,n){
            let smallest = index;
            let left = index*2+1;
            let right = left+1;

            if(left<n&&this.heap[left]<this.heap[smallest]){
                smallest = left
            }
            if(right<n&&this.heap[right]<this.heap[smallest]){
                smallest = right
            }

            if(smallest!==index){
                this.swap(index,smallest);
                this.heapifyDown(smallest,n);
            }
        }



        buildMinHeap(){
            for(let i = Math.floor((this.heap.length-1)/2);i>=0;i--){
                this.heapifyDown(i,this.heap.length);
            }
        }

        heapSort() {
            this.buildMinHeap();

            for (let i = this.heap.length - 1; i > 0; i--) {
                this.swap(0, i);
                this.heapifyDown(0, i);
            }
        }
    }


    const minHeap = new Heap();
    minHeap.insert(41);
    minHeap.insert(39);
    minHeap.insert(33);
    minHeap.insert(18);
    minHeap.insert(27);
    minHeap.insert(12);
    minHeap.insert(55);

    console.log("Min Heap:");
    console.log(minHeap.heap);


    console.log(minHeap.remove());
    console.log(minHeap);
    console.log(minHeap.remove());
    console.log(minHeap);

    // // maxHeap.traversal();
    // console.log("Sorted Array:");
    // minHeap.heapSort();
    // console.log(minHeap.heap);

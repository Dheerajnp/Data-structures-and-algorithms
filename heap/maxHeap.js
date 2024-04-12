class Heap {
    constructor() {
        this.heap = [];
    }

    swap(index, parentIndex) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
    }

    heapifyUp() {
        let index = this.heap.length-1;
        let element = this.heap[index];
        
        while(index>0){
            let parentIdx = Math.floor((index-1)/2);
            let parent = this.heap[parentIdx];
            if(parent>=element)break;
            [this.heap[index],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[index]];
            index=parentIdx;
        }
    }

    heapifyDown(index = 0, n) {
        let largest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        if (leftChild < n && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        if (rightChild < n && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }
        if (largest !== index) {
            this.swap(largest, index);
            this.heapifyDown(largest, n);
        }
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    remove() {
        if (this.isEmpty()) throw new Error("Heap is empty");
        const max = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0, this.heap.length);
        return max;
    }

    traversal(index = 0) {
        if (index < this.heap.length) {
            this.traversal(2 * index + 1);
            console.log(this.heap[index]);
            this.traversal(2 * index + 2);
        }
    }

    buildMaxHeap() {
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.heapifyDown(i, this.heap.length);
        }
    }

    heapSort() {
        this.buildMaxHeap();

        for (let i = this.heap.length - 1; i > 0; i--) {
            this.swap(0, i);
            this.heapifyDown(0, i);
        }
    }
}

// Example usage
const maxHeap = new Heap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

console.log("Max Heap:");
console.log(maxHeap.heap);


console.log(maxHeap.remove());
console.log(maxHeap);
console.log(maxHeap.remove());
console.log(maxHeap);

maxHeap.traversal();
console.log("Sorted Array:");
maxHeap.heapSort();
console.log(maxHeap.heap);


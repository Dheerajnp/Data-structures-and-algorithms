class PriorityQueue {
    constructor() {
        this.heap = [];
    }


    isEmpty() {
        return this.heap.length === 0;
    }


    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }


        const min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }


    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].priority > this.heap[index].priority) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }


    heapifyDown(index) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;


        if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
            smallest = leftChild;
        }


        if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
            smallest = rightChild;
        }


        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }


    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}


// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);


while (!priorityQueue.isEmpty()) {
    const task = priorityQueue.dequeue();
    console.log(`Processing task: ${task.value} (Priority: ${task.priority})`);
}

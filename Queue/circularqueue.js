class CircularQueues {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.rear = this.front = -1;
    }
 
    enqueue(value) {
      if (this.currentLength === this.capacity) {
        console.log('Queue is full');
        return false;
      }
 
      this.rear = (this.rear + 1) % this.capacity;
      console.log("rear", this.rear);
      this.items[this.rear] = value;
      this.currentLength++;
 
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
 
    dequeue() {
      if (this.currentLength === 0) {
        console.log('Queue is empty');
        return null;
      }
 
      let removed = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      console.log("front", this.front);
      this.currentLength--;
 
      if (this.currentLength === 0) {
        // Reset front and rear when the queue becomes empty
        this.front = this.rear = -1;
      }
 
      return removed;
    }
 
    peek() {
      return this.items[this.front];
    }
 
    print() {
      let str = '';
      let i = this.front;
      let count = 0;
 
      while (count < this.currentLength) {
        str += ' ' + this.items[i];
        i = (i + 1) % this.capacity;
        count++;
      }
 
      console.log(str);
    }
  }
 
  // Example Usage:
  const myCircularQueue = new CircularQueues(5);
 
  myCircularQueue.enqueue(1);
  myCircularQueue.enqueue(2);
  myCircularQueue.enqueue(3);
  myCircularQueue.enqueue(4);
  myCircularQueue.print(); 
 
  myCircularQueue.dequeue();
  myCircularQueue.print();
 
  myCircularQueue.enqueue(5);
  myCircularQueue.print(); 
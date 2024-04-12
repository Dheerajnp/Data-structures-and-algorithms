// program to reverse a queue and perform other operations
class Queue {
    constructor() {
      this.items = [];
    }
  
    // adds a new element
    enqueue(element) {
      this.items.push(element);
    }
  
    // removes an element from the head of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // shows the head element of the queue
    peek() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // shows the number of items in queue
    size() {
      return this.items.length;
    }
  
    // checks if queue is empty or not
    isEmpty() {
      return this.items.length == 0;
    }
  
    // empty the queue
    clear() {
      this.items = [];
    }
  
    // reverse the queue
    reverse() {
      let stack = [];
      while (!this.isEmpty()) {
        stack.push(this.dequeue());
      }
      while (stack.length != 0) {
        this.enqueue(stack.pop());
      }
    }
  }
  
  let queue = new Queue();
  
  // add items to queue
  queue.enqueue(8);
  queue.enqueue(6);
  queue.enqueue(4);
  queue.enqueue(2);
  
  console.log("Queue after adding items: ");
  console.log(queue.items);
  
  // remove the first item
  queue.dequeue();
  console.log("Queue after deleting the first item:");
  console.log(queue.items);
  
  // show the first item
  console.log("First item of the queue = " + queue.peek());
  
  // empty the queue
  queue.clear();
  console.log("After clearing the queue: ");
  console.log(queue.items);
  
  // reverse the queue
  queue.enqueue(8);
  queue.enqueue(6);
  queue.enqueue(4);
  queue.enqueue(2);
  console.log("Queue before reversing: ");
  console.log(queue.items);
  queue.reverse();
  console.log("Queue after reversing: ");
  console.log(queue.items);
  
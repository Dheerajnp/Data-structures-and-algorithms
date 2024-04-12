function createNode(value) {
    return {
      value: value,
      next: null,
    };
  }
  
  function linkedList() {
    let head = null;
    let size = 0;
  
    function isEmpty() {
      return size === 0;
    }
  
    function getSize() {
      return size;
    }
  
    function prepend(value) {
      let newNode = createNode(value);
      if (!head) {
        head = newNode;
      } else {
        newNode.next = head;
        head = newNode;
      }
      size++;
    }
  
    function append(value) {
      let newNode = createNode(value);
      if (!head) {
        head = newNode;
      } else {
        let last = head;
        while (last.next) {
          last = last.next;
        }
        last.next = newNode;
      }
      size++;
    }
  
    function insert(value, index) {
      if (index < 0 || index > size) {
        console.log("Size out of bounds");
        return;
      }
  
      if (index === 0) {
        prepend(value);
      } else {
        let node = createNode(value);
        let prev = head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        size++;
      }
    }
  
    function print() {
      if (isEmpty()) {
        console.log("Empty list");
      } else {
        let current = head;
        let listElements = "";
        while (current) {
          listElements += `${current.value} `;
          current = current.next;
        }
  
        console.log(listElements);
      }
    }
  
    function remove(index) {
        if (index < 0 || index > size) {
          console.log("Enter valid index to remove");
          return null;
        }
        if (index === 0) {
          const removedValue = head.value;
          head = head.next;
          size--;
          return removedValue;
        } else {
          let prev = head;
          for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
          }
          const removedValue = prev.next.value;
          prev.next = prev.next.next;
          size--;
          return removedValue;
        }
      }
  
    function reverse() {
      let current = head;
      let prev = null;
      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      head = prev;
    }
  
    return {
      isEmpty,
      getSize,
      prepend,
      append,
      insert,
      print,
      remove,
      reverse,
    };
  }
  
  const list = linkedList();
  
  list.prepend(10);
  list.prepend(20);
  list.prepend(30);
  list.append(100);
  list.append(200);
  list.insert(40, 3);
  list.insert(3000, 6);
  console.log(list.remove(3));
  list.reverse();
  list.print();
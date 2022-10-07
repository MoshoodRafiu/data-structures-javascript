class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor(size) {
    this.front = null;
    this.back = null;
    this.size = size;
    this.length = 0;
  }

  enQueue(value) {
    let node = new Node(value);
    if (this.isFull()) {
      console.log("Overflow!, queue is full");
      return this;
    }
    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
    return this;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Underflow!, queue is empty");
      return this;
    }
    this.front = this.front.next;
    this.length--;
    return this;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.front.value;
  }

  isFull() {
    return this.size === this.length;
  }

  isEmpty() {
    return this.front === null;
  }

  print() {
    let result = [];
    let node = this.front;
    while (node) {
      result.unshift(node.value);
      node = node.next;
    }
    console.log(result.join(" -> "));
  }
}

let queue = new LinkedListQueue(4);
console.log(queue.peek());
queue.enQueue(5);
queue.enQueue(6);
queue.enQueue(7);
queue.enQueue(8);
queue.deQueue();
console.log(queue.peek());
queue.print();

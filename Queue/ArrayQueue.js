class ArrayQueue {
  constructor(size) {
    this.bucket = [];
    this.size = size;
    this.length = 0;
  }

  enQueue(value) {
    if (this.isFull()) {
      console.log("Overflow!, this queue is full");
      return this;
    }
    this.bucket.unshift(value);
    this.length++;
    return this;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Underflow!, this queue is empty");
      return this;
    }
    this.bucket.pop();
    this.length--;
    return this;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    let index = this.length - 1;
    return this.bucket[index];
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.size === this.length;
  }

  print() {
    console.log(this.bucket.join(" -> "));
  }
}

let queue = new ArrayQueue(10);
queue.enQueue(10);
queue.enQueue(9);
queue.enQueue(8);
queue.deQueue();
console.log(queue.peek());
queue.print();

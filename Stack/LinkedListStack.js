class Node
{
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedListStack
{
  constructor(size) {
    this.first = null;
    this.size = size;
    this.length = 0;
  }

  push(val) {
    if (this.isFull()) {
      console.log("Cannot push, stack overflow");
      return false;
    }
    let node = new Node(val);
    node.next = this.first;
    this.first = node;
    this.length++;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Cannot pop, stack underflow");
      return null;
    }
    let val = this.first.val;
    this.first = this.first.next;
    return val;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  isFull() {
    return this.length === this.size;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let node = this.first;
    let result = "";
    while (node) {
      result += node.val + "\n";
      node = node.next;
    }
    console.log(result);
  }
}


let stack = new LinkedListStack(5);
stack.push(10);
stack.push(5);
stack.push(6);
stack.push(3);
stack.pop();
stack.print();
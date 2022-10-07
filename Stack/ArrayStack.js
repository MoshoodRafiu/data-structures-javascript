class ArrayStack
{
  constructor(size) {
    this.size = size;
    this.bucket = new Array();
  }

  push(val) {
    if (this.isFull()) {
      console.log("Cannot push, stack overflow");
      return false;
    }
    this.bucket.push(val);
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Cannot pop, stack underflow");
      return null;
    }
    return this.bucket.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.bucket[this.bucket.length - 1];
  }

  isFull() {
    return this.bucket.length === this.size;
  }

  isEmpty() {
    return this.bucket.length === 0;
  }

  print() {
    let result = "";
    for (let i = this.bucket.length - 1; i >= 0; i--) {
      result += this.bucket[i] + "\n";
    }
    console.log(result);
  }
}

let stack = new ArrayStack(5);
stack.push(10);
stack.push(5);
stack.push(6);
stack.push(3);
stack.pop();
stack.print();
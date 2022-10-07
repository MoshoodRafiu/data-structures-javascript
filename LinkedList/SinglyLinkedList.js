class ListNode
{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList
{
  constructor(head = null) {
    this.head = head;
  }

  addNode(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return this;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }

  print() {
    let result = "";
    let currentNode = this.head;
    while (currentNode) {
      result += ` ${currentNode.data}`;
      currentNode = currentNode.next;
    }
    return result;
  }

  deleteNode(value) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode && currentNode.data !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      previousNode.next = currentNode.next;
    }
    return this;
  }

  clear () {
    this.head = null;
    return this;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}


const headNode = new ListNode(10);
const list = new LinkedList(headNode);

list.addNode(5)
    .addNode(4)
    .addNode(3)
    .addNode(2)
    .addNode(1)
    .deleteNode(4)
    .deleteNode(2);

console.log(list.print());
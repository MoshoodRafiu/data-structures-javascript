class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor(head = null) {
      this.head = head;
      this.tail = head;
      this.length = head ? 1 : 0;
    }

    push(val) {
      let node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        let temp = this.tail;
        this.tail = node;
        node.prev = temp;
        temp.next = node;
      }
      this.length++;
      return this;
    }

    pop() {
      if (this.length > 0) {
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let temp = this.tail;
          this.tail = temp.prev;
          this.tail.next = null;
        }
      }
      this.length--;
      return this;
    }

    unshift(val) {
      let node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        let temp = this.head;
        node.next = temp;
        this.head = node;
        temp.prev = node;
      }
      this.length++;
      return this;
    }

    shift() {
      if (this.length > 0) {
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let temp = this.head;
          this.head = temp.next;
          this.head.prev = null;
        }
      }
      this.length--;
      return this;
    }

    print() {
      let result = [];
      let current = this.head;

      while (current) {
        result.push(current.data);
        current = current.next;
      }

      console.log(result.join(' <--> '));
    }

    insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length) return !!this.push(val);

      let current = this.head;
      let counter = 0;

      while (counter !== index) {
        current = current.next;
        counter++;
      }

      let node = new Node(val);
      let prev = current.prev;
      prev.next = node;
      node.next = current
      node.prev = prev;
      current.prev = node;

      this.length++;
      return this;
    }

    remove(index) {
      if (index < 0 || index > this.length - 1) return false;
      if (index === 0) return !!this.shift();
      if (index === this.length - 1) return !!this.pop();

      let current = this.head;
      let counter = 0;

      while (counter !== index) {
        current = current.next;
        counter++;
      }

      let prev = current.prev;
      let next = current.next;
      prev.next = next;
      next.prev = prev;

      this.length--;
      return this;
    }

    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let counter = 0;
      let prev = null;
      let next;

      while (counter < this.length) {
        next = node.next;
        node.prev = prev;
        node.next = prev;
        prev = node;
        node = next;
        counter++;
      }
    }
  }

  const headNode = new Node(10);
  const list = new DoublyLinkedList(headNode);

  list.push(5);
  list.push(4);
  list.push(8);
  list.push(8);
  list.push(7);
  list.pop();
  list.unshift(1);
  list.shift();
  list.insert(2, 11);
  list.remove(2);
  list.print();
  list.reverse();
  list.print();
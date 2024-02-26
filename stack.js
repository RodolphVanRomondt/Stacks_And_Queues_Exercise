/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {

    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    else {
      if (this.size === 1) {
        this.last = this.first;
      }
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    let toReturn;

    if (this.size === 0) {
      throw Error("Queue is empty.");
    }

    toReturn = this.first.val;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    else if (this.size === 2) {
      this.first = this.last;
      this.first.next = null;
    }

    else {
      this.first.val = this.first.next.val;
      this.first.next = this.first.next.next;
    }

    this.size--;
    return toReturn;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

let q = new Stack();

q.push(10);
q.push(100);
q.push(1000);

// q.pop();
// q.pop();
// q.pop();

console.log(q);

module.exports = Stack;

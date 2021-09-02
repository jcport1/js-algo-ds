// node stores a piece of data - val
//reference to next node - next

// resources : https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
// https://medium.com/swlh/singly-linked-list-in-javascript-a0e58d045561

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("Goodbye");

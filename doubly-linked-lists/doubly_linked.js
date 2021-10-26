// almost identical to a singly linked list
// except every node has another point, to the prev node
// no indexing or random access

//node
// has value, next and prev

//Doubly linked list
// has a tail, head and length

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// Removing a new node from the beginning of the Linked List

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
}

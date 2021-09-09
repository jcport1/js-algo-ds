class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    //set counter to 0 and increment
    let counter = 0;
    //starting node
    let current = this.head;
    //to traverse the list, use while loop and change
    //current to next node
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    //return node at end
    return current;
  }

  set(idx, val) {
    let foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

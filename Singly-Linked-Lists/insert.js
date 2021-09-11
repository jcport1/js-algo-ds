class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    // use methods we've already created
    //doublebang converts value to boolean (true or false)
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    let prevNode = this.get(val - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

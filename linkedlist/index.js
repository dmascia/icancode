class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  /**
   * Adds an item to the head of the linked list.
   * @param {*} value The item to be added to the head of the list.
   */
  insertHead(value) {
    const node = new Node(value, this._head);

    if (this._head == null) {
      this._tail = node;
    }

    this._head = node;
  }

  /**
   * Adds an item to the tail of the linked list.
   * @param {*} value The item to be added to the tail of the list.
   */
  insertTail(value) {
    const node = new Node(value);

    if (this._tail === null) {
      this._head = node;
    } else {
      this._tail.next = node;
    }

    this._tail = node;
  }

  /**
   * Remove the item in the given index and return its value or `undefined` if index is out of bound.
   * @param {int} i The index of the item to be removed.
   * @return {*} The value of the item in index i if it exists, `undefined` otherwise.
   */
  remove(i) {
    if (i === 0 && this._head != null) {
      let value = this._head.value;
      this._head = this._head.next;

      if (this._head == null) {
        this.tail = null;
      }

      return value;
    }

    let curr = this._head;

    for (let j = 1; j < i; j++) {
      if (curr == null || curr.next == null) return undefined;
      curr = curr.next;
    }

    if (curr == null || curr.next == null) return undefined;

    let value = curr.next.value;
    curr.next = curr.next.next;

    this._tail = curr.next == null ? curr : this._tail;

    return value;
  }

  /**
   * Return the value of the item in the given index or `undefined` if index is out of bound.
   * @param {int} i The index of the value of the item to be returned.
   * @return {*} The value of the item in index i if it exists, `undefined` otherwise.
   */
  get(i) {
    let curr = this._head;

    for (let j = 0; j < i; j++) {
      if (curr == null) return undefined;
      curr = curr.next;
    }

    let value = curr != null ? curr.value : undefined;
    return value;
  }

  /**
   * Return an array containing all the values of the items in the linked list from head to tail.
   * @return {*} The array of all the values in the linked list from head to tail.
   */
  toArray() {
    const array = [];
    let curr = this._head;

    while (curr != null) {
      array.push(curr.value);
      curr = curr.next;
    }

    return array;
  }

  /**
   * Return the length / number of elements in the linked list.
   * @return {*} Length of the linked list.
   */
  length() {
    let length = 0;
    let curr = this._head;

    while (curr) {
      length += 1;
      curr = curr.next;
    }

    return length;
  }
}

const linkedlist = new LinkedList();
console.log(linkedlist.toArray()); // []
console.log(linkedlist.insertTail(1));
console.log(linkedlist.insertHead(2));
console.log(linkedlist.toArray()); // [2, 1]
console.log(linkedlist.insertTail(3));
console.log(linkedlist.toArray()); // [2, 1, 3]
console.log(linkedlist.length()); // 3
console.log(linkedlist.get(1)); // 1
console.log(linkedlist.get(2)); // 3
console.log(linkedlist.remove(1)); // 1
console.log(linkedlist.toArray()); // [2, 3]

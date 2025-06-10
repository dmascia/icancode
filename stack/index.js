class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.items.push(item);

    return this.length();
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    const el = this.items.pop();

    if (el === null) return undefined;

    return el;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    const el = this.items[this.length() - 1];

    if (el === null) return undefined;

    return el;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.length()); // 2
console.log(stack.push(3));
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.isEmpty()); // false

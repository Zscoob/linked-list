'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.pointsTo = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.totalNodes = 0;
  }



  addNode(value) {
    let node = new Node(value);
    let current;

    if(this.head == null){
      this.head = node;
    }
    else{
      current = this.head;
      while(current.pointsTo) current = current.pointsTo;
      current.pointsTo = node;
    }
    this.totalNodes++;
  }
  
}

includes(value){
  let current = this.head;

  while (current != null) {
    if (current.value === value)
    return true;
    current = current.pointsTo;
  }
  return false;
}
toString()
{
  let current = this.head;
  let string = '';
  while (current){
    string += current.value + ' ';
    current = current.pointsTo;
  }
  return string;
}

append(value) {
  let current = this.head;
  let newNode = new Node(value);
  while(current !== null) {
    current = current.pointsTo;
    this.newNode++;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if (this.includes(value)) {
      if(current.value === value) {
        this.insert(newValue);
      } else {
        while ()
      }
    }
  }
}
// includes(value)
// {
// }

// let current = head;

// const head = new LinkedListNode(4);

// head.next = new LinkedListNode(8);

// head.next3 = new LinkedListNode(15);

// head.next4 = new LinkedListNode(16);

// head.next5 = new LinkedListNode(23);

// head.next6 = new LinkedListNode(42);

// head.next7 = new LinkedListNode(null);




module.exports = LinkedList;
'use strict';

const LinkedList = require('./linked-list.js');

describe ('linkedList', () =>{
  it ('should create new list', () =>{
    let list = new LinkedList();

    expect(list).toBeDefined();
  });

  it('should be able to add a new node as head', () => {
    let list = new LinkedList();
    expect(list.head).toBe(null);
    list.addNode(4);

    expect(list.head.value).toBe(4);
    expect(list.head.pointsTo).toBe(null);
    
  });

  it('should search a list and return true or false based on if the node is found', () => {
    let list = new LinkedList();

    list.newNode(4);
    list.newNode(8);
    list.newNode(15);
    list.newNode(16);
    list.newNode(23);
    list.newNode(42);
    list.newNode(null);

    expect(list.includes(8)).toBe(true);
    expect(list.includes(80)).toBe(false);
});
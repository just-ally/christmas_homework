const assert = require('assert');
const Store = require('../models/store.js');
const Record = require('../models/record.js');

let store;
let record1;
let record2;
let record3;

describe('Store', function(){

  beforeEach(function(){
    store = new Store('ABC Records', 'Glasgow', 25);
    record1 = new Record('Errors', 'Have Some Faith in Magic', 'Electronica', 8);
    record2 = new Record('Jeff Buckley', 'Grace', 'Rock', 10);
    record3 = new Record('Tycho', 'Epoch', 'Electronica', 9)
  });

  it('should have a name', function(){
    const actual = store.name;
    assert.strictEqual(actual, 'ABC Records')
  });

  it('should have a city', function(){
    const actual = store.city;
    assert.strictEqual(actual, 'Glasgow')
  });

  it('should have an inventory', function(){
    const actual = store.inventory;
    assert.deepStrictEqual(actual, [])
  });

  it('should have a balance', function(){
    const actual = store.balance;
    assert.strictEqual(actual, 25)
  });

  it('should be able to add records to its inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    const actual = store.inventory;
    assert.deepStrictEqual(actual, [record1, record2])
  });

  it('should be able to list inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    const actual = store.listInventory();
    assert.deepStrictEqual(actual, ["Have Some Faith in Magic", "Grace"])
  });

  it('should be able to sell a record that is in stock', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record2);
    const actualInventory = store.listInventory();
    assert.deepStrictEqual(actualInventory, ["Have Some Faith in Magic"])
    const actualBalance = store.balance;
    assert.strictEqual(actualBalance, 35)
  });

  it('should not be able to sell a record that is not in stock', function(){
    store.addRecord(record1);
    const actualInventory = store.listInventory();
    assert.deepStrictEqual(actualInventory, ["Have Some Faith in Magic"])
    const actualBalance = store.balance;
    assert.strictEqual(actualBalance, 25)
  });

  it('should be able to report financial standing of store', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    const actual = store.reportFinances();
    assert.strictEqual(actual, 43)
  });

  it('should be able to view all records of a given genre', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    const actual = store.findByGenre('Electronica');
    assert.deepStrictEqual(actual, [record1, record3])
  });

})

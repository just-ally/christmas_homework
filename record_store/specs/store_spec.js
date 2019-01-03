const assert = require('assert');
const Store = require('../models/store.js');
const Record = require('../models/record.js');

let store;
let record1;
let record2;

describe('Store', function(){

  beforeEach(function(){
    store = new Store('ABC Records', 'Glasgow', 25);
    record1 = new Record('Errors', 'Have Some Faith in Magic', 'Electronica', 8);
    record2 = new Record('Jeff Buckley', 'Grace', 'Rock', 10)
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

})

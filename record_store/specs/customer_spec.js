const assert = require('assert');
const Customer = require('../models/customer.js');
const Store = require('../models/store.js')
const Record = require('../models/record.js')

let customer;

describe('Customer', function(){

  beforeEach(function(){
    customer = new Customer(30);
    record1 = new Record('Errors', 'Have Some Faith in Magic', 'Electronica', 8);
    record2 = new Record('Jeff Buckley', 'Grace', 'Rock', 40);
    record3 = new Record('Tycho', 'Epoch', 'Electronica', 9)
    record4 = new Record('Warpaint', 'Heads Up', 'Indie', 10)
  });

  it('should have a wallet amount', function(){
    const actual = customer.wallet;
    assert.strictEqual(actual, 30)
  });

  it('should start with an empty collection', function(){
    const actual = customer.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to buy records if affordable', function(){
    customer.buyRecord(record1)
    const actualWallet = customer.wallet;
    assert.strictEqual(actualWallet, 22);
    const actualCollection = customer.collection;
    assert.deepStrictEqual(actualCollection, [record1])
  });

  it('should not be able to buy records if not affordable', function(){
    customer.buyRecord(record2)
    const actualWallet = customer.wallet;
    assert.strictEqual(actualWallet, 30);
    const actualCollection = customer.collection;
    assert.deepStrictEqual(actualCollection, [])
  });

  it('should be able to sell records', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record3);
    customer.removeFromCollection(record1);
    const actualWallet = customer.wallet;
    assert.strictEqual(actualWallet, 21);
    const actualCollection = customer.collection;
    assert.deepStrictEqual(actualCollection, [record3])
  });

  it('should be able to view the total value of collection', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    const actual = customer.totalValue();
    assert.strictEqual(actual, 27);
  });

  it('should be able to view the total value of one genre', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    const actual = customer.totalValueByGenre('Electronica');
    assert.strictEqual(actual, 17);
  });

})

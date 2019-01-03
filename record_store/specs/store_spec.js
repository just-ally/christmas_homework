const assert = require('assert');
const Store = require('../models/store.js');

let store;

describe('Store', function(){

  beforeEach(function(){
    store = new Store('ABC Records', 'Glasgow')
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

})

const assert = require('assert');
const Record = require('../models/record.js');

let record;

describe('Record', function(){

  beforeEach(function(){
    record = new Record('Errors', 'Have Some Faith in Magic', 'Electronica', 8)
  });

  it('should have an artist', function(){
    const actual = record.artist;
    assert.strictEqual(actual, 'Errors')
  });

  it('should have a title', function(){
    const actual = record.title;
    assert.strictEqual(actual, 'Have Some Faith in Magic')
  });

  it('should have a genre', function(){
    const actual = record.genre;
    assert.strictEqual(actual, 'Electronica')
  });

  it('should have a price', function(){
    const actual = record.price;
    assert.strictEqual(actual, 8)
  });

  it('should be print out the record\'s properties as a string', function(){
    const actual = record.printProperties();
    assert.deepStrictEqual(actual, "Errors, Have Some Faith in Magic, Electronica, 8")
  });

})

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

})

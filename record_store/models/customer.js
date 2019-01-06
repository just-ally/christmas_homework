const Customer = function(wallet){
  this.wallet = wallet;
  this.collection = [];
}

Customer.prototype.addToCollection = function(record) {
  this.collection.push(record);
}

Customer.prototype.buyRecord = function(record) {
  if (this.wallet >= record.price){
    this.wallet -= record.price
    this.addToCollection(record);
  }
};

Customer.prototype.removeFromCollection = function(record) {
  const index = this.collection.indexOf(record);
  if (index !== -1) {
    this.collection.splice(index, 1);
    this.sellRecord(record);
  }
};

Customer.prototype.sellRecord = function(record) {
  this.wallet += record.price;
};

Customer.prototype.totalValue = function() {
  let total = 0;
  for (let record of this.collection) {
    total += record.price;
  }
  return total;
}

Customer.prototype.findByGenre = function(genre) {
  const results = [];
  for (let record of this.collection){
    if (record.genre === genre){
      results.push(record);
    }
  }
  return results;
}


Customer.prototype.totalValueByGenre = function(genre) {
  const results = this.findByGenre(genre);
  let total = 0;
  for (let record of results){
    total += record.price;
  }
  return total;
}

module.exports = Customer;

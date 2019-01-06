const Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

Store.prototype.addRecord = function(record) {
  this.inventory.push(record)
};

Store.prototype.listInventory = function() {
  return this.inventory.map((record) => {
    return record.title
  });
}

// should this be split into two methods? to change balance and to remove from inventory?
Store.prototype.sellRecord = function(record) {
  const index = this.inventory.indexOf(record);
  if (index !== -1) {
    this.inventory.splice(index, 1);
    this.balance += record.price
  };
};

// Store.prototype.sellRecord = function(record) {
//   this.balance += record.price
// };
//
// Store.prototype.removeRecord = function(recordToRemove) {
//   const index = this.inventory.indexOf(recordToRemove);
//   if (index !== -1) {
//     this.inventory.splice(index, 1);
//     this.sellRecord(recordToRemove);
//   } else {
//     return "This record is not in stock"
//   };
// };


Store.prototype.reportFinances = function() {
  let total = this.balance
  for (let record of this.inventory){
    total += record.price;
  }
  return total;
}

Store.prototype.findByGenre = function(genre) {
  const results = [];
  for (let record of this.inventory){
    if (record.genre === genre){
      results.push(record);
    }
  }
  return results;
}


module.exports = Store;

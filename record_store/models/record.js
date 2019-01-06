const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

// object method that can be called here that will return keys and values? values? fromEntries?
Record.prototype.printProperties = function() {
  return `${this.artist}, ${this.title}, ${this.genre}, ${this.price}`;
};


module.exports = Record;

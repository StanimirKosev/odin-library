function Book(title,author,pages,readStatus){ /**object constructor */
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

Book.prototype.info = function(){
  return `${this.title} of ${this.author}, ${this.pages} pages, ${this.readStatus}` 
}

const book1 = new Book("The Almanack","Naval Ravikant","200","read") 
console.log(book1.info())


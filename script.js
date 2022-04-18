let myLibrary = [];

function Book(title,author,pages,readStatus){ /**object constructor */
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function addBookToLibrary(){ /** add event listener's */
  let title = window.prompt("What's the book title?");
  let author = window.prompt("Who is the author?");
  let pages = window.prompt("How much pages is the book?");
  let readStatus = window.prompt("Is the book read or unread?");
  
  const book = new Book(title,author,pages,readStatus); 
  
  myLibrary.push(book);
  return book.info();
}

Book.prototype.info = function(){
  return `${this.title} of ${this.author}, ${this.pages} pages, ${this.readStatus}` 
}

console.log(addBookToLibrary());
console.log(addBookToLibrary());
console.log(myLibrary); /**add 2 buttons */



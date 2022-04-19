let myLibrary = [];

function Book(title,author,pages,readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function addBookToLibrary(){ 
  let title = window.prompt("What's the book title?");  
  let author = window.prompt("Who is the author?");
  let pages = window.prompt("How much pages is the book?");
  let readStatus = window.prompt("Is the book read or unread?");
  
  const book = new Book(title,author,pages,readStatus); 

  myLibrary.push(book);
  return book.info(); 
}

Book.prototype.info = function(){
  const text = document.querySelector('.text');
  let bookCard = document.createElement('div');
  text.appendChild(bookCard);
  bookCard.textContent = `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}` 
}

const addBook = document.querySelector('.addBook');
addBook.addEventListener('click',()=>{ 
  addBookToLibrary()
  });





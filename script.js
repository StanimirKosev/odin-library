let myLibrary = [];

function Book(title,author,pages,readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function defaultBook(){
  const book = new Book('The Almanack of Naval Ravikant:A Guide to Wealth and Happiness','Eric Jorgenson','244','read');
  myLibrary.push(book);
  return book.info(); 
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
  const parent = document.querySelector('.parent');
  let bookCard = document.createElement('button');
  parent.appendChild(bookCard).className = 'card';
  bookCard.textContent = `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}` 
}

const addBook = document.querySelector('.addBook');
addBook.addEventListener('click',()=>{ 
  addBookToLibrary()
  });

defaultBook();
/**Prevents pop up window when refreshing, caused by the default book displayed*/
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}



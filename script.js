let myLibrary = [];

function Book(title,author,pages,readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

Book.prototype.info = function(){
  const parent = document.querySelector('.parent');
  let bookCard = document.createElement('button');
  parent.appendChild(bookCard).className = 'card';
  bookCard.textContent = `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}` 
}

function defaultBook(){
  const book = new Book('The Almanack of Naval Ravikant:A Guide to Wealth and Happiness','Eric Jorgenson','244','read');
  myLibrary.push(book);
  return book.info(); 
}
defaultBook();

function addBookToLibrary(title,author,pages,readStatus){ 
  const book = new Book(title,author,pages,readStatus); 
  myLibrary.push(book);
  return book.info(); 
}

document.querySelector('.submitButton').onclick = function(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let readStatus = document.getElementById('readStatus').value;
  addBookToLibrary(title,author,pages,readStatus);
  closeModal(modal);
}

/********** Modal ***********/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget) /**data attributes - selects the #modal and passes it to the function*/
    openModal(modal);
  })
});

function openModal(modal){
  if (modal == null ) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') /** selects the closest parent */
    closeModal(modal);
  })
});

function closeModal(modal){
  if (modal == null ) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click',() => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal);
  })
})



/**Prevents chrome pop up window when refreshing, caused by the default book displayed*/
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

/** JS Validations - not yet */
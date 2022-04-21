let myLibrary = [];

function Book(title,author,pages,readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

Book.prototype.info = function(){
  const library = document.querySelector('.library'); 
  let bookCard = document.createElement('button');  /* dom element to be removed */
  library.appendChild(bookCard).className = 'card';
  for ( let i = 0 ; i < myLibrary.length ; i++){
    bookCard.setAttribute('data-index',i);
  }
  
  let titleDiv = document.createElement('div');
  bookCard.appendChild(titleDiv).className = 'bookInfo';
  titleDiv.innerText = `${this.title}`
  
  let authorDiv = document.createElement('div');
  bookCard.appendChild(authorDiv).className = 'bookInfo';
  authorDiv.innerText = `Author: ${this.author}`

  let pagesDiv = document.createElement('div');
  bookCard.appendChild(pagesDiv).className = 'bookInfo';
  pagesDiv.innerText = `Pages: ${this.pages}`
  
  /*let statusDiv = document.createElement('div');
  bookCard.appendChild(statusDiv).className = 'bookInfo';
  statusDiv.innerText = `Status: ${this.readStatus}`*/

  let closeBook = document.createElement('button');
  bookCard.appendChild(closeBook);
  closeBook.classList.add("closeBook" , "trash");
  closeBook.innerText = 'Remove'

  let statusBook = document.createElement('button');
  bookCard.appendChild(statusBook).className = 'statusBook';
  statusBook.innerText = 'Status'
}

function defaultBook(){
  const book = new Book('The Almanack of Naval Ravikant: A Guide to Wealth and Happiness','Eric Jorgenson','244','read');
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
  clearFields();
  closeModal(modal);
}

function clearFields(){
    let title = document.getElementById('title').value = '';
    let author = document.getElementById('author').value = '';
    let pages = document.getElementById('pages').value = '';
    let readStatus = document.getElementById('readStatus').value = Selection[1];
}


  function removeBookFromLibrary(event){
    if (event.target.className === "closeBook trash"){
      const index = event.target.parentElement.getAttribute('data-index');
      console.log(event.target.parentElement.getAttribute('data-index'));
      document.querySelectorAll('[data-index]')[index].remove();
      myLibrary.splice(index, 1);
      


      let card = document.querySelectorAll('.library .card');
  
      card.forEach(el =>{
      
      for ( let i = 0 ; i < myLibrary.length ; i++){
        el = document.querySelectorAll('.card')[i];
        console.log(document.querySelectorAll('.card')[i]);
        el.setAttribute('data-index', i );
        console.log(document.querySelectorAll('[data-index]'));
      }
    })
    



  
  }}

document.addEventListener('click', (event) => {
  removeBookFromLibrary(event);
});


    
    
 
  
  

  
  


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
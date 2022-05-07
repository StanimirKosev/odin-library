const myLibrary = []

class Book {
    // class declaration
    constructor(title, author, pages, readStatus) {
        // class constructor
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }

    makeObj() {
        // class method
        const library = document.querySelector('.library')
        const bookCard =
            document.createElement('button') /* dom element to be removed */
        library.appendChild(bookCard).className = 'card'

        const titleDiv = document.createElement('div')
        bookCard.appendChild(titleDiv).className = 'bookInfo'
        titleDiv.innerText = `${this.title}`

        const authorDiv = document.createElement('div')
        bookCard.appendChild(authorDiv).className = 'bookInfo'
        authorDiv.innerText = `Author: ${this.author}`

        const pagesDiv = document.createElement('div')
        bookCard.appendChild(pagesDiv).className = 'bookInfo'
        pagesDiv.innerText = `Pages: ${this.pages}`

        const closeBook = document.createElement('button')
        bookCard.appendChild(closeBook)
        closeBook.classList.add('closeBook', 'trash')
        closeBook.innerText = 'Remove'

        const statusBook = document.createElement('button')
        bookCard.appendChild(statusBook)
        statusBook.classList.add('statusBook')
        statusBook.innerText = this.readStatus

        if (this.readStatus === 'Read') {
            statusBook.classList.toggle('Read')
        } else if (this.readStatus === 'Unread') {
            statusBook.classList.toggle('Unread')
        } else {
            statusBook.classList.toggle('undefined')
        }

        for (let i = 0; i < myLibrary.length; i += 1) {
            bookCard.setAttribute('data-index', i)
            statusBook.setAttribute('data-button-index', i)
            /** sets attribute upon creation - stays static when removing elements( not updating with index of array or Dom elements)  */
            /** sets for card - removing func and status button - change of status func */
        }
    }
}

function defaultBook() {
    const book = new Book(
        'The Almanack of Naval Ravikant: A Guide to Wealth and Happiness',
        'Eric Jorgenson',
        '244',
        'Read'
    )
    myLibrary.push(book)
    return book.makeObj() // create new obj
}
defaultBook()

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book)
    return book.makeObj() // create new obj
}

/** ******** Modal ********** */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(
            button.dataset.modalTarget
        ) /** data attributes - selects the #modal and passes it to the function */
        openModal(modal)
    })
})

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal') /** selects the closest parent */
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach((modal) => {
        closeModal(modal)
    })
})

function clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('readStatus').value = Selection[1]
}

const submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const readStatus = document.getElementById('readStatus').value
    addBookToLibrary(title, author, pages, readStatus)
    clearFields()
    closeModal(modal)
})

function removeBookFromLibrary(event) {
    if (event.target.className === 'closeBook trash') {
        const index =
            event.target.parentElement.getAttribute(
                'data-index'
            ) /** takes the "static" atribute of the books */
        document
            .querySelectorAll('[data-index]')
            [index].remove() /** remove book */
        myLibrary.splice(index, 1) /** remove object from array */

        for (let i = 0; i < myLibrary.length; i += 1) {
            document
                .querySelectorAll('[data-index]')
                [i].setAttribute('data-index', i) /** updates set Attribute  */
            document
                .querySelectorAll('[data-button-index]')
                [i].setAttribute(
                    'data-button-index',
                    i
                ) /** sets attr for status button too */
        }
    }
}

document.addEventListener('click', (event) => {
    removeBookFromLibrary(event)
})

function changeBookStatus(event) {
    const index = event.target.getAttribute('data-button-index')
    const el = document.querySelectorAll('[data-button-index]')[index]

    if (event.target.className === 'statusBook Read') {
        el.classList.remove('Read')
        el.classList.toggle('Unread')
        el.innerText = 'Unread'
    } else if (event.target.className === 'statusBook Unread') {
        el.classList.remove('Unread')
        el.classList.toggle('Read')
        el.innerText = 'Read'
    } else if (event.target.className === 'statusBook undefined') {
        el.classList.remove('undefined')
        el.classList.toggle('Read')
        el.innerText = 'Read'
    }
}

document.addEventListener('click', (event) => {
    changeBookStatus(event)
})

document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

/** Prevents chrome pop up window when refreshing, caused by the default book displayed */
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href)
}

/** JS Validations - not yet */

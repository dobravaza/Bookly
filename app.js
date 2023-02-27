//wsywietlanie boxa po add a book
const addButton = document.querySelector('#add_book')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const dateInput = document.querySelector('#published')

const exit = () => {
	const popup = document.querySelector('.popup')
	//ading class
	popup.classList.add('active')
	//exit
	const exit = document.querySelector('#goBack')
	exit.addEventListener('click', () => {
		popup.classList.remove('active')
	})
}
addButton.addEventListener('click', exit)

let myLibrary = []

// funkcja tworząca obiekt książki
function Book(title, author, pages, date, choice) {
	this.title = title
	this.author = author
	this.pages = pages
	this.date = date
	this.choice = choice
}

// funkcja dodająca nową książkę do tablicy myLibrary

function createStructure(title, author, pages, date, choice) {
	const addTr = document.createElement('tr')
	const selectAll = document.createElement('td')
	const addTdTitle = document.createElement('td')
	const addTdAuthor = document.createElement('td')
	const addTdPages = document.createElement('td')
	const addTdPublished = document.createElement('td')
	const addTdAcquired = document.createElement('td')
	const addTdStatus = document.createElement('td')
	//icon delete
	const addBookEdit = document.createElement('td')
	const addBookEditIconsDelete = document.createElement('span')
	addBookEditIconsDelete.textContent = ' delete'
	addBookEditIconsDelete.classList.add('material-symbols-outlined')
	addBookEdit.appendChild(addBookEditIconsDelete)
	//
	//icon edit
	const addBookEditIconsEdit = document.createElement('span')
	addBookEditIconsEdit.textContent = ' edit'
	addBookEditIconsEdit.classList.add('material-symbols-outlined')
	addBookEdit.appendChild(addBookEditIconsEdit)
	//
	addTdTitle.classList.add('book_title')
	addTdAuthor.classList.add('book_author')
	addTdPages.classList.add('book_pages')
	addTdPublished.classList.add('book_published')
	addTdAcquired.classList.add('book_acquired')
	addTdStatus.classList.add('book_status')
	addBookEdit.classList.add('book_edit')
	selectAll.id = 'select_leiqxlqp'
	//
	const selectTbody = document.querySelector('tbody')

	//
	const selectCheckbox = document.createElement('input')
	selectCheckbox.type = 'checkbox'
	selectCheckbox.id = 'select_leiqxlqp'
	selectCheckbox.name = 'selected[]'
	selectCheckbox.value = selectCheckbox.id
	selectAll.appendChild(selectCheckbox)
	//adding to structore
	selectTbody.appendChild(addTr)
	addTr.appendChild(selectAll)
	addTr.appendChild(addTdTitle)
	addTr.appendChild(addTdAuthor)
	addTr.appendChild(addTdPages)
	addTr.appendChild(addTdPublished)
	addTr.appendChild(addTdAcquired)
	addTr.appendChild(addTdStatus)
	addTr.appendChild(addBookEdit)

	//
	addTdTitle.textContent = title
	addTdAuthor.textContent = author
	addTdPages.textContent = pages
	addTdPublished.textContent = date
	addTdAcquired.textContent = choice
	addTdStatus.textContent = 'Read'

	//change status
	addTdStatus.addEventListener('click', () => {
		addTdStatus.classList.toggle('book_status2')
		if (!addTdStatus.classList.contains('book_status2')) {
			addTdStatus.textContent = 'read'
		} else {
			addTdStatus.textContent = `I haven't read it yet!`
		}
	})
	titleInput.value = ''
	authorInput.value = ''
	pagesInput.value = ''

	const popup = document.querySelector('.popup')
	popup.classList.remove('active')
	//deleting element
	addBookEditIconsDelete.addEventListener('click', () => addTr.remove())
}
function addBookToLibrary() {
	// pobieramy wartości z inputów
	const title = document.querySelector('#title').value
	const author = document.querySelector('#author').value
	const pages = document.querySelector('#pages').value
	const date = document.querySelector('#published').value
	const choice = document.querySelector('#choice').value

	// tworzymy nowy obiekt książki
	const newBook = new Book(title, author, pages, date, choice)

	if (titleInput.value.trim() === '' || pagesInput.value.trim() === '' || authorInput.value.trim() === '') {
		let errorMessage = ''
		if (isNaN(pagesInput.value)) {
			errorMessage += 'The number of pages should be a number.\n'
		}

		if (titleInput.value.trim() === '') {
			errorMessage += 'Please enter a book title.\n'
		}

		if (authorInput.value.trim() === '') {
			errorMessage += 'Please enter an author name.\n'
		}

		if (pagesInput.value.trim() === '') {
			errorMessage += 'Please enter the number of pages, it should be only an number\n'
		}

		if (errorMessage !== '') {
			alert(errorMessage)
			return
		}

		// reszta kodu

		alert('Please select a title or author and number of pages to')
		return
	} else {
		for (let i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].title === title) {
				alert('This book is already added to the library')
				return
			}
		}
	}

	myLibrary.push(newBook)
	// wyświetlamy tablicę myLibrary w konsoli (opcjonalnie)
	console.log(myLibrary)

	createStructure(title, author, pages, date, choice)
}
// dodajemy nasłuchiwanie na przycisk "submit"
const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', addBookToLibrary)

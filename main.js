let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read || false
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  render();
  closeForm();
}

function render() {
  const library = document.getElementById('library');
  library.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');
    readStatus.textContent = book.read ? 'Read ✅' : 'Not Read ❌';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', () => removeBook(i));

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggleRead');
    toggleButton.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
    toggleButton.addEventListener('click', () => toggleReadStatus(i));

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleButton);

    library.appendChild(bookCard);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function toggleReadStatus(index) {
  const book = myLibrary[index];
  book.read = !book.read;
  render();
}

function openForm() {
  const form = document.getElementById('modalAddBook');
  form.style.display = 'block';
}

function closeForm() {
  const form = document.getElementById('modalAddBook');
  form.style.display = 'none';
}

const newBookBtn = document.getElementById('addNewBook');
newBookBtn.addEventListener('click', openForm);

const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

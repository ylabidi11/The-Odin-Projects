const myLibrary = [];

const displayBooks = () => {
    ul.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let li = document.createElement("li");
        li.appendChild(liCreateComponent(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read));
        ul.appendChild(li)
    }
}

const liCreateComponent = (title, author, pages, read) => {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(title + " "));
    div.appendChild(document.createTextNode(author + " "));
    div.appendChild(document.createTextNode(pages + " "));
    div.appendChild(read ? document.createTextNode("Read") : document.createTextNode("Not read"));


    return div
}

// Create a book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

const addBookToLibrary = () => {

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value === "true" ? true : false;

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";

    myLibrary.push(new Book(title, author, pages, read));

    displayBooks()
}

let ul = document.getElementById("books");

let titleInput = document.getElementById("add-title");
let authorInput = document.getElementById("add-author");
let pagesInput = document.getElementById("add-pages");
let readInput = document.getElementById("add-read");

let submitButton = document.getElementById("submit-book");
submitButton.addEventListener('click', addBookToLibrary)

displayBooks()
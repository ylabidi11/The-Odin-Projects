function books (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

const theHobbit = new books("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info() === "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet")
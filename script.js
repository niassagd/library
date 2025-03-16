const myLibrary = [];

const harryPotter1 = {
    title: "Harry Potter 1",
    author: "J. K. Rowling",
    pages: 250,
    read: true,
    id: 54343,
}

const catInTheHat = {
    title: "Cat In The Hat",
    author: "Suess",
    pages: 20,
    read: false,
    id:36363,
}

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(harryPotter1);
addBookToLibrary(catInTheHat);

const library = document.querySelector(".library");

function createBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        
        const book = document.createElement("div");
        book.classList.add("book");
        book.textContent = myLibrary[i].title;
        
        library.appendChild(book);
    };    
}


//create form to add new book

const form = document.querySelector("form");

const newBookButton = document.querySelector('.newBookBtn');
newBookButton.addEventListener("click", () => {
    const newTitle = document.createElement("input");
    newTitle.id = "title";
    newTitle.name = "title";
    newTitle.type = "text";
    
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.for = "title";

    form.appendChild(titleLabel);
    titleLabel.appendChild(newTitle);
    
    const newAuthor = document.createElement("input");
    newAuthor.id = "author";
    newAuthor.name = "author";
    newAuthor.type = "text";

    const authorLabel = document.createElement("label");
    authorLabel.id = "author";
    authorLabel.textContent = "Author: "

    form.appendChild(authorLabel);
    authorLabel.appendChild(newAuthor);

    const newPages = document.createElement("input");
    newPages.id = "pages";
    newPages.name = "pages";
    newPages.type = "number";

    const pagesLabel = document.createElement("label");
    pagesLabel.id = "pages";
    pagesLabel.textContent = "Number of Pages: ";
    
    form.appendChild(pagesLabel);
    pagesLabel.appendChild(newPages);

    const newRead = document.createElement("input");
    newRead.type = "button";
    newRead.textContent = "Add Book";
    form.appendChild(newRead);
})



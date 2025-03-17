const myLibrary = [];

const harryPotter1 = {
    title: "Harry Potter 1",
    author: "J. K. Rowling",
    pages: 250,
    read: "read",
    id: 54343,
}

const catInTheHat = {
    title: "Cat In The Hat",
    author: "Suess",
    pages: 20,
    read: "not read",
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
    library.innerHTML= '';
    for (let i = 0; i < myLibrary.length; i++) {    
        const book = document.createElement("div");
        book.classList.add("book");

        const bookTitle = document.createElement("p");
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("bookTitle");
        book.appendChild(bookTitle);

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `by ${myLibrary[i].author}`;
        bookAuthor.classList.add("bookAuthor");
        book.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.textContent = `${myLibrary[i].pages} pages`;
        bookPages.classList.add("bookPages");
        book.appendChild(bookPages);

        //book status

        const bookRead = document.createElement("p");
        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead");
        book.appendChild(bookRead);

        //create button to change book status: read

        const readButton = document.createElement("button");
        readButton.classList.add(".readBtn");
        readButton.textContent = "Change Read Status";

        book.appendChild(readButton);  
        
        library.appendChild(book);
    };    
}




//create form to add new book

const form = document.querySelector("form");
const submitMessage = document.createElement("p");

//new book title

const newTitle = document.createElement("input");
newTitle.id = "title";
newTitle.name = "title";
newTitle.type = "text";
newTitle.required = true;

const titleLabel = document.createElement("label");
titleLabel.textContent = "Title: ";
titleLabel.for = "title";

//new book author
const newAuthor = document.createElement("input");
newAuthor.id = "author";
newAuthor.name = "author";
newAuthor.type = "text";
newAuthor.required = true;

const authorLabel = document.createElement("label");
authorLabel.for = "author";
authorLabel.textContent = "Author: "

//new book pages

const newPages = document.createElement("input");
        newPages.id = "pages";
        newPages.name = "pages";
        newPages.type = "number";
        newPages.required = true;
    
        const pagesLabel = document.createElement("label");
        pagesLabel.for = "pages";
        pagesLabel.textContent = "Number of Pages: ";
    
//form inputs for read or not read status

const newRead = document.createElement("fieldset");


const readStatus = document.createElement("legend");
readStatus.textContent = "Have you already read this book?";


//radio button and label for "read"
const hasRead = document.createElement("input");
hasRead.type = "radio";
hasRead.name = "bookStatus";
hasRead.id = "hasRead";
hasRead.value = "read";
hasRead.required = true;

const readLabel = document.createElement("label");
readLabel.for = "bookStatus";
readLabel.textContent = "yes";

//radio button and label for "not read"
const hasNotRead = document.createElement("input")
hasNotRead.type = "radio";
hasNotRead.name = "bookStatus";
hasNotRead.id = "hasNotRead";
hasNotRead.value = "not read";

const notReadLabel = document.createElement("label");
notReadLabel.for = "bookStatus";
notReadLabel.textContent = "no";

//create submit button to add book
    
const addBook = document.createElement("input");
addBook.type = "submit";
addBook.value = "Add Book";
addBook.classList.add(".addBook")

// button to open form for new book 

const newBookButton = document.querySelector('.newBookBtn');
newBookButton.addEventListener("click", () => {
    if (!document.getElementById("myForm")) {
        if (document.getElementById("message")) {
            form.innerHTML= "";
        }
        form.id = "myForm";

        
    
        form.appendChild(titleLabel);
        titleLabel.appendChild(newTitle);
        
    
        form.appendChild(authorLabel);
        authorLabel.appendChild(newAuthor);
        
        form.appendChild(pagesLabel);
        pagesLabel.appendChild(newPages);

        form.appendChild(newRead);

        newRead.appendChild(readStatus);

        newRead.appendChild(readLabel);
        readLabel.appendChild(hasRead);

        

        newRead.appendChild(notReadLabel);
        notReadLabel.appendChild(hasNotRead);

        
        form.appendChild(addBook);

        
    }
})



//Click Add book button to create new Book object and Add to library array
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    console.log(title);

    const author = document.getElementById("author").value;
    console.log(author);

    const pages = document.getElementById("pages").value;
    console.log(pages);

    const bookStatus = document.querySelector('input[name="bookStatus"]:checked').value;
    console.log(bookStatus);
    
    myLibrary.push(new Book(title, author, pages, bookStatus));
    createBooks();

    //reset form

    form.reset();

    //remove inputs

    newTitle.remove();
    titleLabel.remove();
    newAuthor.remove();
    authorLabel.remove();
    newPages.remove();
    pagesLabel.remove();
    addBook.remove();
    newRead.remove();

    

    const myMessage = "Your book has been added to the library!";
    submitMessage.innerHTML = myMessage;
    form.appendChild(submitMessage);
    form.id = "message";
});
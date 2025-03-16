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
    library.innerHTML= '';
    for (let i = 0; i < myLibrary.length; i++) {    
        const book = document.createElement("div");
        book.classList.add("book");
        book.textContent = myLibrary[i].title;
        
        library.appendChild(book);
    };    
}


//create form to add new book

const form = document.querySelector("form");
const submitMessage = document.createElement("p");

const newBookButton = document.querySelector('.newBookBtn');
newBookButton.addEventListener("click", () => {
    if (!document.getElementById("myForm")) {
        if (document.getElementById("message")) {
            form.innerHTML= "";
        }
        form.id = "myForm";

        const newTitle = document.createElement("input");
        newTitle.id = "title";
        newTitle.name = "title";
        newTitle.type = "text";
        newTitle.required = true;
        
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title: ";
        titleLabel.for = "title";
    
        form.appendChild(titleLabel);
        titleLabel.appendChild(newTitle);
        
        const newAuthor = document.createElement("input");
        newAuthor.id = "author";
        newAuthor.name = "author";
        newAuthor.type = "text";
        newAuthor.required = true;
    
        const authorLabel = document.createElement("label");
        authorLabel.for = "author";
        authorLabel.textContent = "Author: "
    
        form.appendChild(authorLabel);
        authorLabel.appendChild(newAuthor);
    
        const newPages = document.createElement("input");
        newPages.id = "pages";
        newPages.name = "pages";
        newPages.type = "number";
        newPages.required = true;
    
        const pagesLabel = document.createElement("label");
        pagesLabel.for = "pages";
        pagesLabel.textContent = "Number of Pages: ";
        
        form.appendChild(pagesLabel);
        pagesLabel.appendChild(newPages);
    
        const addBook = document.createElement("input");
        addBook.type = "submit";
        addBook.value = "Add Book";
        addBook.classList.add(".addBook")
        form.appendChild(addBook);

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const title = document.getElementById("title").value;
            console.log(title);

            const author = document.getElementById("author").value;
            console.log(author);

            const pages = document.getElementById("pages").value;
            console.log(pages);
            
            myLibrary.push(new Book(title, author, pages, true));
            createBooks();

            newTitle.remove();
            titleLabel.remove();
            newAuthor.remove();
            authorLabel.remove();
            newPages.remove();
            pagesLabel.remove();
            addBook.remove();

            
            const myMessage = "Your book has been added to the library!";
            submitMessage.innerHTML = myMessage;
            form.appendChild(submitMessage);
            form.id = "message";
        });
    }
})

//Click Add book button to create new Book object and Add to library array


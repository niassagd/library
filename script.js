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

        

        //book status

        const bookRead = document.createElement("p");
        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead");
        book.appendChild(bookRead);

        //create button to change book status: read

        const readButton = document.createElement("button");
        readButton.classList.add("readBtn");
        readButton.textContent = "Change Read Status";

        book.appendChild(readButton);  

        //book pages
        const bookPages = document.createElement("p");
        bookPages.textContent = `${myLibrary[i].pages} pages`;
        bookPages.classList.add("bookPages");
        book.appendChild(bookPages);

        //remove book button
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeBtn");
        removeButton.textContent = "X";
        removeButton.title = "Remove from library"
        book.appendChild(removeButton);

        const bookId = myLibrary[i].id;
        console.log(bookId);

        removeButton.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            createBooks();
        })

        library.appendChild(book);
    };    
}




//create form to add new book

const form = document.querySelector("form");
const submitMessage = document.createElement("p");

//new book form heading
const formHeading = document.createElement("h2");
formHeading.innerHTML = "New Book";

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

//form: new book pages

const newPages = document.createElement("input");
        newPages.id = "pages";
        newPages.name = "pages";
        newPages.type = "number";
        newPages.required = true;
    
        const pagesLabel = document.createElement("label");
        pagesLabel.for = "pages";
        pagesLabel.textContent = "# of Pages: ";
    
//form inputs for read or not read status

const newRead = document.createElement("fieldset");

const readStatus = document.createElement("legend");
readStatus.textContent = "Have you already read this book?";


//form: radio button and label for "read"
const hasRead = document.createElement("input");
hasRead.type = "radio";
hasRead.name = "bookStatus";
hasRead.id = "hasRead";
hasRead.value = "read";
hasRead.required = true;

const readLabel = document.createElement("label");
readLabel.for = "bookStatus";
readLabel.textContent = "yes";

const radioDiv = document.createElement("div");
radioDiv.classList.add("radioBtns");

//form: radio button and label for "not read"
const hasNotRead = document.createElement("input")
hasNotRead.type = "radio";
hasNotRead.name = "bookStatus";
hasNotRead.id = "hasNotRead";
hasNotRead.value = "not read";

const notReadLabel = document.createElement("label");
notReadLabel.for = "bookStatus";
notReadLabel.textContent = "no";

//form: create submit button to add book
    
const addBook = document.createElement("input");
addBook.type = "submit";
addBook.value = "Add Book";
addBook.classList.add(".addBook")

//form: create button to close form

const closeFormBtn = document.createElement("button");
closeFormBtn.classList.add("closeBtn");
closeFormBtn.textContent = "x";

//new book button to open form for new book 

const newBookButton = document.querySelector('.newBookBtn');
newBookButton.addEventListener("click", () => {
    if (!document.getElementById("myForm")) {
        if (document.getElementById("message")) {
            form.innerHTML= "";
        }
        form.id = "myForm";
        //form heading

        form.appendChild(formHeading);
        //title input
        form.appendChild(titleLabel);
        titleLabel.appendChild(newTitle);
        //author input
        form.appendChild(authorLabel);
        authorLabel.appendChild(newAuthor);
        //pages input
        form.appendChild(pagesLabel);
        pagesLabel.appendChild(newPages);
        //fieldset containing radio buttons read yes and no
        form.appendChild(newRead);
        //legend
        newRead.appendChild(readStatus);
        //radio button div 
        newRead.appendChild(radioDiv);
            //read: yes
            radioDiv.appendChild(readLabel);
            readLabel.appendChild(hasRead);
            //read: no
            radioDiv.appendChild(notReadLabel);
            notReadLabel.appendChild(hasNotRead);
        //add book submit button
        form.appendChild(addBook);
        //add close form button
        form.appendChild(closeFormBtn);
    }
})

//close btn event listener
closeFormBtn.addEventListener("click", () => {
    //reset form
    form.reset();
    //remove inputs
    formHeading.remove();
    newTitle.remove();
    titleLabel.remove();
    newAuthor.remove();
    authorLabel.remove();
    newPages.remove();
    pagesLabel.remove();
    addBook.remove();
    newRead.remove();
    //hide form
    form.id = "hidden";
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
    formHeading.remove();
    newTitle.remove();
    titleLabel.remove();
    newAuthor.remove();
    authorLabel.remove();
    newPages.remove();
    pagesLabel.remove();
    addBook.remove();
    newRead.remove();

    

    const myMessage = `Your book, ${title}, by ${author} has been added to the library!`;
    submitMessage.innerHTML = myMessage;
    form.appendChild(submitMessage);
    form.id = "message";
});



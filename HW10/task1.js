const path = require("path");
const Book = require(path.resolve(__dirname, "Book.js"));
const EBook = require(path.resolve(__dirname, "EBook.js"));

const book1 = new Book("berserk", "Kentaro Miura", "1990");
const book2 = new Book("lord of the flies", "William Golding", "1954");
const book3 = new Book("legends of nevskiy avenue", "Michael Veller", "1993", "PDF");

book1.printInfo();
book2.printInfo();
book3.printInfo();

const books = [book1, book2, book3];
console.log("Oldest Book:", Book.oldestBook(books).title);

const ebookFromBook = EBook.createFromBook(book1, "EPUB");
ebookFromBook.printInfo();

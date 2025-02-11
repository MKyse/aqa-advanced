class Book {
    constructor(title, author, year) {
        this._title = title;   
        this._author = author; 
        this._year = year;     
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid title');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid author');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error('Invalid year');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`"${this.title}" - ${this.author}, ${this.year}`);
    }

    static oldestBook(books) {
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}

module.exports = Book;
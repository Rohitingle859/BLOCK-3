
const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book is missing information!");
      return;
    }

    this.books.push(book);
    console.log(` Book "${book.title}" added.`);
  },


  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

 
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Book "${title}" removed.`);
    } else {
      console.log("Book not found!");
    }
  }
};

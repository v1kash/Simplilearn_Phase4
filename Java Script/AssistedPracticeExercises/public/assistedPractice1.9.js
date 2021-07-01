/**
 * 
 */

class Book {
   constructor(name, author) {
      this.name = name;
      this.author = author;
   }
   show() {
      console.log(`Book name: ${this.name}`);
      console.log(`Author: ${this.author}`);
   }
}
const book = new Book(
   'JavaScript: The Good Parts', 'Douglas Crockford'
);
console.log(book.name);  
book.show();

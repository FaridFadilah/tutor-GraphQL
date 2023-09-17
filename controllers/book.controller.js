import { books } from "../data.js";

const BookController = {
  books: () => books,
  findBook: ( _ , {id}) => {
    const book = books.find(v => v.id === id);
    return book ? book : null;
  },
}

export { BookController }
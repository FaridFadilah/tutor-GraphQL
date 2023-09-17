const typeDefs = `
  type Book{
    id    : ID
    title : String
    author : String
  }

  type Author{
    id      : ID
    name    : String
    books   : [Book]
  }

  type Query{
    findAuthor(id : Int!) : Author
    findBook(id : Int!) : Book
    authors: [Author]
    books: [Book]
  }
`
 
// {!} is nullability those is the field can't empty


  const booksByCategory = [
    {
      category: 'ficção',
      books: [
        {
          title: 'Lord of the Rings',
          author: "J. R. R. Tolkien",
        },
        {
          title: 'Insterstellar',
          author: "Christopher Nolan and Jonathan Nolan",
        },
        {
          title: 'Harry Potter and the Order of the Phoenix',
          author: 'J. K. Rowling',
        },
      ],
    },
    {
      category: "Ação",
      books: [
        {
          title: 'Maze Runner: Run or Die',
          author: 'James dashner',
        },
        {
          title: 'Naruto Shippuden',
          author: "Masashi Kishimoto",
        },
        {
          title:'Naruto',
          author: "Masashi Kishimoto",
        },
      ],
    },
  ];

    const totalCategories = booksByCategory.length

    for(let category of booksByCategory) {
      console.log("Total de livros da categoria: ", category.category)
      console.log(category.books.length)
    }

    function countAuthors(){
      let authors = [];

      for(let category of booksByCategory) {
        for(let book of category.books) {
          if(authors.indexOf(book.author) == -1) {
            authors.push(book.author)
        }
      }
    }

    console.log("Total de Autores", authors.length)
  }

  countAuthors();

  function booksOfAuthor(author){
    let books = [];
      for(let category of booksByCategory) {
       for(let book of category.books) {
        if(books.author === author) {
          books.push(books.title)
        }
      }
      console.log(`Livros do autor ${author}: ${books} `)
  }
}

  

  booksOfAuthor('Masashi Kishimoto') 
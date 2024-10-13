/* eslint-disable react/prop-types */
import {  useSelector } from 'react-redux';
import Book from './Book';
import Filter from './Filter';
import SearchBox from './SearchBox';
import Header from './Header';
import { useState } from 'react';



const Books = () => {
  const booksFromState = useSelector(state => state.books.books); 
  const [books, setBooks] = useState(booksFromState);
  
 

  function handleSearch(searchTerm) {
    const filteredBooks = booksFromState.filter(book =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredBooks) {
      setBooks(filteredBooks); 
    }else{
      return 'No Books'
    }
  }
 

  function handleSort(sortInput) {
    let sortedBooks;

    switch (sortInput) {
      case 'name_asc':
        sortedBooks = books.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        sortedBooks = books.slice().sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'year_asc':
        sortedBooks = books.slice().sort((a, b) => a.publicationYear - b.publicationYear);
        break;
      case 'year_desc':
        sortedBooks = books.slice().sort((a, b) => b.publicationYear - a.publicationYear);
        break
    }
    setBooks([...sortedBooks])
  }


  function handleFavourite(bookId) {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { 
          ...book, 
          favourite: !book.favourite,
         }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <>
     <Header />
      <div className='md:flex items-center md:items-end md:justify-between mb-8 lg:mb-10 mx-auto max-w-7xl'>
        <SearchBox onSearch={handleSearch} />
        <Filter handleSort={handleSort} />
      </div>
      <
      >
        {books.length === 0 ? (<div className="text-4xl p-20 bg-white font-bold text-gray-500 text-center"><h1>No Books Found!!</h1></div>) : (<div className="container mx-auto grid grid-cols-1 gap-10 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{books?.map(book => <Book key={book?.id} book={book} handleFavourite={handleFavourite} />)}</div>)}
        
      </>
    </>
  );
}

export default Books;

/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Book from './Book';
import Filter from './Filter';
import SearchBox from './SearchBox';
import Header from './Header';

const Books = () => {
  const books = useSelector(state => state.books.books)

  function handleSearch(searchTerm) {
    const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setBooks(filteredBooks)
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
      <div className='flex items-end justify-between mb-8 lg:mb-10 mx-auto max-w-7xl'>
        <SearchBox onSearch={handleSearch} />
        <Filter handleSort={handleSort} />
      </div>
      <div
        className="container mx-auto grid grid-cols-1 gap-10 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {books?.map(book => <Book key={book?.id} book={book} handleFavourite={handleFavourite} />)}
      </div>
    </>
  );
}

export default Books;

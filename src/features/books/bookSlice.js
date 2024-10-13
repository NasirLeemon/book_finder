import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../lib/bookData";

// initial state is accessible by writing state.books
//  books: [...booksData] = state.books.books
//  singleBook = state.books.singlebook

const initialState = {
    books: [...booksData],
    singleBook: null,
    filteredBooks : [] 

}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers : {
        showSingleBook : (state, action) => {
            const bookId = +action.payload
            state.singleBook = state.books.find(book => book.id === bookId)
        },
        showSearchBooks : (state, action) => {
            const searchTerm = action.payload
            state.filteredBooks = state.books.filter((book) => book.name.toLowerCase().includes(searchTerm.toLowerCase()))   
        },
    }
})
export const selectedSingleBook = state => state.books.singleBook
export const { showSingleBook,showSearchBooks,resetFilteredBooks } = booksSlice.actions
export default booksSlice.reducer
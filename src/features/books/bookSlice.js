import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../lib/bookData";

// initial state is accessible by writing state.books
//  books: [...booksData] = state.books.books
//  singleBook = state.books.singlebook

const initialState = {
    books: [...booksData],
    singleBook: null, 

}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers : {
        showSingleBook : (state, action) => {
            const bookId = +action.payload
            state.singleBook = state.books.find(book => book.id === bookId)
        }
    }
})
export const selectedSingleBook = state => state.books.singleBook
export const { showSingleBook } = booksSlice.actions
export default booksSlice.reducer
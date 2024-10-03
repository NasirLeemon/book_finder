import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import booksReducer from './features/books/bookSlice'



const store = configureStore({
    reducer: {
        books: booksReducer, 
        cart: cartReducer,
    }
})

export default store;
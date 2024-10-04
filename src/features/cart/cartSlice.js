import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    items: []
}

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCartItem : (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart : (state, action) => {
            const itemId = action.payload
           state.items = state.items.filter(item => item.id !== itemId)
        }
    }
})

export const {addToCartItem, removeFromCart} = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    item: []
}

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCartItem : (state, action) => {
            state.item.push(action.payload)
        }
    }
})

export const {addToCartItem} = cartSlice.actions
export default cartSlice.reducer
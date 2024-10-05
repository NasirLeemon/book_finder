import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    items: [],
    originalPrice: 0,
    totalPrice: 0,
    dCharge: 70,
}

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCartItem : (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)

            if (existingItem) {
                existingItem.quantity += 1  
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
            state.originalPrice += action.payload.price
        },
        incrementQuantity: (state, action) => {
            const itemToIncrement = state.items.find(item => item.id === action.payload);
        
            if (itemToIncrement) {
                itemToIncrement.quantity += 1; 
                state.originalPrice += itemToIncrement.price
            }
        },
        
        decrmentQuantity : (state, action) => {
            const itemToDecrement = state.items.find(item => item.id === action.payload);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity -= 1
                state.originalPrice -= itemToDecrement.price
            } else{
                state.items = state.items.filter(item => item.id !== action.payload)
                state.originalPrice -= itemToDecrement.price
            }
            
            
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.items.find(item => item.id === itemId);
        
            if (itemToRemove) {
                // Adjust the total price by subtracting the price for the quantity of items
                state.originalPrice -= itemToRemove.price * itemToRemove.quantity;
                
                // Remove the item from the items array
                state.items = state.items.filter(item => item.id !== itemId);
            }
        }
        
    }
})

export const subTotal = state => state.cart.originalPrice + state.cart.dCharge

export const {addToCartItem, removeFromCart, incrementQuantity, decrmentQuantity} = cartSlice.actions
export default cartSlice.reducer
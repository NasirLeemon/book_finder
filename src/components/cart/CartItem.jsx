import React from 'react'
import { useDispatch } from 'react-redux'
import { decrmentQuantity, incrementQuantity, removeFromCart } from '../../features/cart/cartSlice'

const CartItem = ({item}) => {

    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeFromCart(+item.id))
    }

    const handleIncrement = () => {
       
        dispatch(incrementQuantity(item.id))
    }

    const handleDecrement = () => {
        dispatch(decrmentQuantity(item.id))
    }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 w-full h-full ">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
    <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20 dark:hidden" src={item.image} alt="imac image" />
        <img className="hidden h-20 w-20 dark:block" src={item.image} alt="imac image" />
    </a>

    <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
    <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
            <button onClick={handleDecrement} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                -
            </button>
            <input
    type="text"
    id="counter-input"
    data-input-counter
    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
    value={item.quantity} 
    readOnly 
    required
/>
            <button onClick={handleIncrement}  type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  dark:hover:bg-gray-600 dark:focus:ring-gray-700">
               +    
            </button>
        </div>
        <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    </div>

    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name} by {item.author}</a>

        <div className="flex items-center gap-4">
            <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>
                Add to Favorites
            </button>

            <button onClick={handleRemove} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                Remove
            </button>
        </div>
    </div>
</div>
</div>
  )
}

export default CartItem

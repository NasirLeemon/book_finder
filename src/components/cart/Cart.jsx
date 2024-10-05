import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { subTotal } from '../../features/cart/cartSlice';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)
    const cartTotalPrice = useSelector(state => state.cart.totalPrice)
    const originalPrice = useSelector(state => state.cart.originalPrice)
    const dCharge = useSelector(state => state.cart.dCharge)

    const totalPrice = useSelector(subTotal)

    return (
        <div className=" w-full md:p-10 border  border-gray-200  flex justify-center items-center">
            <div className='bg-[#EAE6D7] border-2 border-white p-10 w-2/3 rounded-lg'>


                <div className="px-4 2xl:px-0 ">
                    <div className='text-center'>
                        <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">Shopping Cart</h2>
                    </div>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className=" w-full  lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">

                                {cartItems.length === 0 ? (
                                    <div className=' p-20 '>
                                        <p className='text-lg text-gray-800'>No Books In the cart!!</p>
                                        <Link to='/'>
                                            <p className='text-blue-950'>Add some books</p>
                                        </Link>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id}>
                                            <CartItem item={item} />
                                        </div>
                                    ))
                                )}



                            </div>
                        </div>

                        <div className=" mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${originalPrice}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-600">-$00</dd>                                        </dl>
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Charge</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${dCharge}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">${totalPrice}</dd>
                                    </dl>
                                </div>

                                <Link to="/checkout" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cart

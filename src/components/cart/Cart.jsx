import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { subTotal } from '../../features/cart/cartSlice';
import CartItem from '../cart/CartItem'
import CartForm from './CartForm';
import empty_icon from "../../assets/icon_empty_cart.webp"


const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)
    const cartTotalPrice = useSelector(state => state.cart.totalPrice)
    const originalPrice = useSelector(state => state.cart.originalPrice)
    const dCharge = useSelector(state => state.cart.dCharge)

    const totalPrice = useSelector(subTotal)
   

    return (
        <div className=" w-full md:p-10   flex justify-center items-center">
            <div className=' px-4 py-8 '>
                <div className="flex flex-col items-center border-b bg-white  py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <a href="#" className="text-2xl font-bold text-gray-800">BROCOLEE BOOK'S</a>
                    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base ">
                        <div className="relative">
                            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg
                                        ></a>
                                    <span className="font-semibold text-gray-900">Shop</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                                    <span className="font-semibold text-gray-900">Shipping</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                    <span className="font-semibold text-gray-500">Payment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 bg-[#9CA986] pb-10">
                    <div className="px-4 pt-8">
                        <p className="text-xl text-white font-medium">Order Summary</p>
                        <p className="text-white">Check your items. And select a suitable shipping method.</p>
                        <div className="mt-8 space-y-3 rounded-lg  px-2 py-4 sm:px-6 w-full">
                            {cartItems.length === 0 ? (
                                <div className=' p-20 '>
                                    <img className='w-50 h-40 mb-2' src={empty_icon} alt="empty icon" />
                                    <h2 className='text-2xl font-bold my-2 text-white'>Your Cart Is Empty!!!</h2>
                                    <p className='text-sm text-white'>Looks like you haven't made order yet.</p>
                                    <Link to='/'>
                                        <p className='text-blue-800 font-bold underline'>Continue to Shopping</p>
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
                    <div className="mt-10  px-4 pt-8 lg:mt-0">
                <div className='mb-5'>
                <p className="text-lg text-white font-medium">Shipping Methods</p>
                        <form className="mt-5 grid gap-6">
                            <div className="relative">
                                <input className="peer hidden" id="radio_1" type="radio" name="radio" defaultChecked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                    <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold text-slate-800 ">Fedex Delivery</span>
                                        <p className="text-slate-800 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                            <div className="relative">
                                <input className="peer hidden" id="radio_2" type="radio" name="radio" defaultChecked />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                    <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold text-slate-800">Cash On Delivery</span>
                                        <p className="text-slate-800 text-sm leading-6">Delivery: 2-4 Days</p>
                                    </div>
                                </label>
                            </div>
                        </form>
                </div>
                        <p className="text-xl font-medium text-white">Payment Details</p>
                        <p className="text-white">Complete your order by providing your payment details.</p>
                        <div className="">
                            <CartForm />

                            {/* <!-- Total --> */}
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium  text-white">Subtotal</p>
                                    <p className="font-semibold text-white ">${originalPrice}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white">Shipping</p>
                                    <p className="font-semibold text-white">${cartItems.length === 0 ? 0 : dCharge}</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-white">Total</p>
                                <p className="text-2xl font-semibold text-white">${cartItems.length === 0 ? 0 : totalPrice}</p>
                            </div>
                        </div>
                        <Link
                            to={cartItems.length > 0 ? "/payment" : "#"}
                            onClick={(e) => cartItems.length === 0 && e.preventDefault()}
                            className={` mt-5 flex w-full items-center justify-center rounded-lg ${cartItems.length > 0 ? "bg-gray-500 hover:bg-primary-800" : "bg-gray-800 cursor-not-allowed"
                                } px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300`}
                        >
                            Proceed to Checkout
                        </Link>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Cart

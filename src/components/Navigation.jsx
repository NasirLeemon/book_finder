
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import brocoleeLogo from '../assets/brocolee-logo.png'
import brocoleebooks from '../assets/broccobooks.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BellSvg from './svgs/BellSvg';
import CartSvg from './svgs/CartSvg';

const Navigation = () => {
  const cartItem = useSelector(state => state.cart.items)
  const [showNotification, setShowNotification] = useState(false)
  const [prevCartLength, setPrevCartLength] = useState(cartItem.length)


  useEffect(() => {
    if (cartItem.length > prevCartLength) {
      setShowNotification(true)
      setTimeout(() => {
        setShowNotification(false);
      }, 500);
    }
  }, [cartItem.length])
  return (
    <nav className="pt-2 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <Link to="/">
          <img
            className="max-w-[100px] md:max-w-[160px]"
            src={brocoleeLogo}
            alt="Brocolee logo"
          />
        </Link>
       
        <div className='flex gap-1'>
          <BellSvg />
          <Link className='relative' to='/cart' >
            <CartSvg />
            <span className='font-bold absolute text-white right-[-15px] top-[-15px] p-2 bg-gray-600  h-6 w-6 rounded-full text-sm flex justify-center items-center'>{cartItem && cartItem.length}</span>
          </Link>

        </div>
      </div>
      {showNotification && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Item added to cart!
        </div>
      )}
    </nav>
  );
}

export default Navigation;

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { selectedSingleBook, showSingleBook } from '../features/books/bookSlice'
import { useDispatch, useSelector } from 'react-redux'
import starImage from '../assets/star.svg'

const SingleBook = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const book = useSelector(selectedSingleBook)
  const { name, image, publicationYear, author, description, price, rating, favourite } = book || {}

  useEffect(() => {
    dispatch(showSingleBook(id))
  }, [dispatch, id])


  if (!book) {
    return <div>Loading...</div>
  }

  const handleAddToCart = () => {

  }


  return (

    <div className=" w-full  border  border-gray-200  flex justify-center items-center md:p-5">
      <div className='bg-white flex flex-col md:flex-row md:w-1/2 p-2 md:p-0  rounded-lg shadow'>
        {/* image div */}
        <div className='md:w-1/2 flex justify-center items-center'>
          <img className="sm:max-w-[144px] h-[200px] md:h-full md:max-w-full p-2 md:p-8 rounded-t-lg bg-cover " src={image} alt="product image" />

        </div>
        {/* details div*/}
        <div className="md:py-8 md:pr-8 md:flex md:flex-col md:justify-between md:w-1/2">
          {/* name,author */}
          <div>
            <h5 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
            <h5 className=' text-sm md:text-lg mt-'><span className='md:font-semibold'>Author:</span> {author}</h5>
            <h3 className=' text-sm md:text-xl mt-3 md:mt-10 font-semibold'> Publication Year: {publicationYear}</h3>
            <h3 className='text-sm md:text-xl mt-1 md:mt-2'>{description}</h3>
          </div>
          {/* price */}
          <div>
            <span className="text-xl mt-2 md:mt-0 md:text-3xl font-bold text-gray-900 ">Price: ${price}</span>
          </div>
          {/* ratings */}
          <div className="flex items-center mt-2.5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span>Rating: </span>
              <div className="flex items-center space-x-1">

                <img src={starImage} />
                <img src={starImage} />
                <img src={starImage} />
                <img src={starImage} />
                <img src={starImage} />

              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  dark:text-blue-800 ms-3">5.0</span>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-5 mt-1 md:mt-0">
            <button
              onClick={() => handleFavourite(id)}
              className={`${favourite ? 'flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5' : 'flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5'}`}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                  fill={`${favourite ? '#DC2954' : 'none'}`}
                />
                <path
                  d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                  stroke={`${favourite ? '#DC2954' : 'currentColor'}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              Favourite
            </button>
            <button
              onClick={handleAddToCart}
              className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>




  )
}

export default SingleBook

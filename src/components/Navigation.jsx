
// eslint-disable-next-line no-unused-vars
import React from 'react';
import brocoleeLogo from '../assets/brocolee-logo.png'

const Navigation = () => {
    return (
        <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[160px]"
            src={brocoleeLogo}
            alt="BROCOLEE"
          />
        </a>
        <div className='flex gap-1'>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_142)">
            <path
              d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
              stroke="#1C4336"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
              stroke="#1C4336"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_142">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 6H20L18 14H8L6 6Z"
    stroke="#1C4336"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <circle
    cx="9"
    cy="20"
    r="1.5"
    stroke="#1C4336"
    strokeWidth="2"
  />
  <circle
    cx="15"
    cy="20"
    r="1.5"
    stroke="#1C4336"
    strokeWidth="2"
  />
</svg>

        </div>
      </div>
    </nav>
    );
}

export default Navigation;

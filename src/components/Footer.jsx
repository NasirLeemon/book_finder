// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm lg:text-base">
          Copyright ©2024 | All rights reserved by <span
  className="cursor-pointer"
  onClick={() => window.open('https://abunasirlimon.vercel.app', '_blank')}
>
  Abu Nasir Limon
</span>

        </p>
      </div>
    </footer>
    );
}

export default Footer;

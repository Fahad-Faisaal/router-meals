import React from 'react';
import Navbar from './Navbar';

const Header = ({searchHandler}) => {
  return (
    <div className='bg-gray-800 mb-10 sm:mb-14'>
      <Navbar searchHandler={searchHandler} />
    </div>
  );
};

export default Header;
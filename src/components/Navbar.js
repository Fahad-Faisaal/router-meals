import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({searchHandler}) => {
  return (
    <nav className='container mx-auto px-5 h-20 flex justify-between items-center'>
      <h2 className='text-gray-300 font-bold text-2xl'>Router Meals</h2>
      <div className='flex items-center gap-12 text-gray-300 font-bold text-lg tracking-wide'>
        <input 
        onChange={searchHandler}
        className='h-6 w-40 sm:w-auto rounded-lg outline-none text-gray-900 p-2 text-sm' 
        type="search" 
        placeholder='Search for Food'
        />
        <Link className='' to={'/'}>Home</Link>
        <Link to={'/recipes'}>Recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
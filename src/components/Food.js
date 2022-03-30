import React from 'react';

const Food = ({food}) => {
  const {strMealThumb, strMeal, strCategory} = food
  console.log(food);
  return (
    <div className='w-64 h-96 rounded-lg shadow-lg'>
      <img className='w-64 h-60 mb-1 rounded-t-lg' src={strMealThumb} alt="" />
      <div className='h-36 pl-1 pb-3 flex flex-col justify-around'>
        <h1 className='font-bold text-xl text-gray-800'>{strMeal}</h1>
        <p className='font-medium text-lg'>Category: {strCategory}</p>
        <button className='bg-green-600 text-gray-900 py-2 px-4 font-bold w-1/2 rounded-lg hover:bg-green-500 duration-200'>See Details</button>
      </div>
    </div>
  );
};

export default Food;
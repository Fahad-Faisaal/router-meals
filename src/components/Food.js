import React from 'react';

const Food = ({food}) => {
  const {strMealThumb, strMeal, strCategory} = food
  console.log(food);
  return (
    <div className='w-64 rounded-lg shadow-lg'>
      <img className='w-64 mb-1 rounded-t-lg' src={strMealThumb} alt="" />
      <div className='pl-1'>
        <h1 className='font-bold text-xl text-gray-800'>{strMeal}</h1>
        <p className='font-medium text-lg'>Category: {strCategory}</p>
      </div>
    </div>
  );
};

export default Food;
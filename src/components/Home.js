import React, { useEffect, useState } from 'react';
import Food from './Food';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => setFoods(data.meals));
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-9'>
      {
        foods.map(food => <Food 
          key={food.idMeal} 
          food={food} 
        />)
      }
    </div>
  );
};

export default Home;<h1>Home</h1>
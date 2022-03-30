import Food from './Food';

const Home = ({foods}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-9 mb-10'>
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
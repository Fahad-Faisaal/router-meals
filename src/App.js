import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Recipes from './Recipes';

function App() {
  const [foods, setFoods] = useState([]);
  const [searchedFood, setSearchedFood] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => setFoods(data.meals));
  }, []);

  const searchHandler = (e) => {
    setSearchedFood(e.target.value)
  }

  useEffect(() => {
    if(searchedFood){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`)
     .then(res => res.json())
     .then(data => setFoods(data.meals))
    }
  }, [searchedFood]);
  
  return (
    <div className="App">
      <Header searchHandler={searchHandler} />
      <Routes>
        <Route path="/" element={<Home foods={foods} />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>
    </div>
  );
}

export default App;

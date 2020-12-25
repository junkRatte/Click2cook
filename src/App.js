import './App.scss';
import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import Recipe from './components/Recipe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const APP_ID = "ebbadcbb";
  const APP_KEY = "720fb2032206ed13d7c19a7242a44fa7";

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
    

  useEffect(() => {
    getRecipes()
      .then(response => {
        setIsLoaded(true);
      },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      ) 
  }, [query]);

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <Router>
      <div className="container">
        <Navbar updateSearch={updateSearch} getSearch={getSearch}/>
        <div className="container__content">
          <SearchResults recipes={recipes} error={error} isLoaded={isLoaded}/>
          <Switch>
            <Route path="/recipe/:id" exact component={Recipe}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

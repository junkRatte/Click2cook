import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Recipe ( {match} ) {
    const APP_ID = "ebbadcbb";
    const APP_KEY = "720fb2032206ed13d7c19a7242a44fa7";

    const [items, setItems] = useState([]);
    const [ingredients, setIgredients] = useState([]);
    

    const fetchRecipe = async () => {
        const fetchRecipe = await fetch(`https://api.edamam.com/search?q=${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const items = await fetchRecipe.json();
        setItems(items.hits[0].recipe);
        setIgredients(items.hits[0].recipe.ingredients);
    }

    let location = useLocation();

    useEffect(() => {
        fetchRecipe();
    }, [location]); 

    console.log(items)
        
    return (
        <div className="recipe">
            <div>
                <div className="recipe__img">
                    <img src={items.image}/>
                </div>
                <div className="recipe__title">
                    <h1><span>{items.label}</span></h1>
                </div>
                <div className="recipe__ingredients">
                    {ingredients.map(ingredient => (
                        <ul>
                            <li>- {ingredient.text}</li>
                        </ul>
                    ))}
                </div>
                <div className="recipe__direction">
                    <a href={items.url} target="_black" rel="noopener noreferrer">Check the full recipe &#8594;</a>
                </div>
            </div>
        </div>
    )
}

export default Recipe

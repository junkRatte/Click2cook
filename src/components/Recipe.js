import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function Recipe ( {match} ) {
    const APP_ID = "ebbadcbb";
    const APP_KEY = "720fb2032206ed13d7c19a7242a44fa7";

    const [recipe, setRecipe] = useState({});

    const fetchRecipe = async () => {
        const fetchRecipe = await fetch(`https://api.edamam.com/search?q=${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const recipe = await fetchRecipe.json();
        setRecipe(recipe.hits[0].recipe);
        console.log(recipe.hits[0]);
    }

    let location = useLocation();

    useEffect(() => {
        fetchRecipe();
    }, [location]);   


    return (
        <div className="recipe">
                <div>
                    <div className="recipe__img">
                        <img src={recipe.image}/>
                    </div>
                    <div className="recipe__details">
                        <h1>{recipe.label}</h1>
                    </div>
                    <div className="recipe__ingredients">
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="recipe__directions">
                    
                    </div>
                </div>
        </div>
    )
}

export default Recipe

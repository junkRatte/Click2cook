import React from 'react';
import {Link} from 'react-router-dom';

function SearchResults( {recipes, error, isLoaded} ) {

    if (error) {
        return <div className="loading">Search for recipes</div>;
    } else if (!isLoaded) {
        return <div className="loading">Loading...</div>;
    } else {
        return (
            <div className="search__results">
                <ul className="search__results--list">
                    {recipes.map(recipe => (
                        <li className="preview">
                            <Link className="preview__link" to={`/recipe/${recipe.recipe.label}`} >
                                <img src={recipe.recipe.image}/>
                                <div className="preview__data">
                                    <h4 className="preview__data--title">{recipe.recipe.label}</h4>
                                    <p className="preview__data--publisher">{recipe.recipe.source}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults

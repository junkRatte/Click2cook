import React from 'react';

function SearchResults( {recipes, error, isLoaded} ) {

    {/* const showRecipe = () => {
        console.log('hi')
    } */}

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
                            <a className="preview__link" /* onClick={showRecipe} */>
                                <img src={recipe.recipe.image}/>
                                <div className="preview__data">
                                    <h4 className="preview__data--title">{recipe.recipe.label}</h4>
                                    <p className="preview__data--publisher">{recipe.recipe.source}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults

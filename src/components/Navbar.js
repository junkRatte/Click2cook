import React from 'react'

function Navbar( {search, updateSearch, getSearch} ) {

    return (
        <header>
            <div className="logo">
                <i class="fas fa-utensils"></i>
                <p>Click2cook</p>
            </div>

            <form className="search__form" onSubmit={getSearch}>
                <input type="text" className="search__field" value={search} onChange={updateSearch} placeholder="Search for a recipe"/>
                <button><i class="fas fa-search"></i>Search</button>
            </form>

            <div className="fork">
                <a href="https://forkify-v2.netlify.app/" target="_blank">Inspired by Forkify</a>
            </div>
        </header>
    )
}

export default Navbar

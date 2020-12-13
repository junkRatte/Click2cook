import React from 'react'

function Navbar( {search, updateSearch, getSearch} ) {
    const toggleList = () => {
        let bookmarkList = document.getElementById('bookmark');
        bookmarkList.classList.toggle('show');
    }

    return (
        <header>
            <div className="logo">
                <i class="fas fa-utensils"></i>
                <p>Click2cook</p>
            </div>

            <form className="search__form" onSubmit={getSearch}>
                <input type="text" className="search__field" value={search} onChange={updateSearch}/>
                <button><i class="fas fa-search"></i>Search</button>
            </form>

            <div onClick={toggleList} className="bookmark">
                <i class="far fa-bookmark"></i>
                <p className="text">Bookmarks</p>
            </div>
            <div id="bookmark" className="bookmark__list hidden">
                <ul>
                    <p className="error">No saved recipes.</p>
                </ul>
            </div>
        </header>
    )
}

export default Navbar

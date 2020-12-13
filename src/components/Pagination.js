import React from 'react'

const Pagination = ( {postsPerPage, totalPosts, paginate} ) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
      }


    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className="pagination__item ">
                        <a onClick={() => paginate(number)} className="pagination__link active">
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
            <p>Inspired by Forkify from Jonas Schmedtmann</p>
        </div>
    )
}

export default Pagination

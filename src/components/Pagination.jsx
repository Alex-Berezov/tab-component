  
import React from 'react';

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a 
              onClick={() => paginate(number)} 
              href='!#' 
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
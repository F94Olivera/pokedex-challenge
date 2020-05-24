import React from 'react';
import './Pagination.css';

function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row-sm">
        <div className="d-flex justify-content-center">
          <nav className="test" aria-label="Page navigation example">
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a
                    onClick={() => paginate(number)}
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">{number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

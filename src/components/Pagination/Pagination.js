import React, { useContext } from 'react';
import './Pagination.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Pagination({ cardsPerPage, totalCards, paginate, loading }) {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div></div>;
  }

  return (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="container-fluid mt-4"
    >
      <div className="row-sm">
        <div className="d-flex justify-content-center">
          <nav className="test" aria-label="Page navigation example">
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a
                    onClick={() => paginate(number)}
                    style={{ backgroundColor: theme.ui }}
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

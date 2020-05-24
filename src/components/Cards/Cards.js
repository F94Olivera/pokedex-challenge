import React, { useContext } from 'react';
import './Cards.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Cards({
  cards,
  loading,
  indexOfFirstCard,
  modalDetails,
  POKE_API_SPRITE,
}) {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  if (loading)
    return (
      <div className="container-fluid mt-5">
        <div className="row justify-content-around">
          <h1>Loading...</h1>
        </div>
      </div>
    );

  return (
    // <!-- Cards -->
    <div className="container-fluid mt-5">
      <div className="row justify-content-around">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => modalDetails(i)}
            className="card"
            style={{
              width: '18rem',
              background: theme.ui,
              color: theme.syntax,
            }}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <img
              src={`${POKE_API_SPRITE}${i + indexOfFirstCard + 1}.png`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{card.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

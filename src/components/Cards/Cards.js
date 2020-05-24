import React from 'react';
import './Cards.css';

function Cards({
  cards,
  loading,
  indexOfFirstCard,
  modalDetails,
  POKE_API_SPRITE,
}) {
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
            style={{ width: '18rem' }}
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

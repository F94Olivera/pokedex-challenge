import React, { useState, useEffect } from 'react';
import './Modal.css';
import axios from 'axios';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon-species/';
const POKE_API_SPRITE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Modal({ modalCard }) {
  const [pokemon, setPokemon] = useState(modalCard);
  const [isEn, setIsEn] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      const res = await axios.get(
        `${POKE_API}${modalCard.name ? modalCard.name : 1}`
      );

      setPokemon(res.data);
    };

    fetchCard();
  }, [modalCard]);

  const parse = (type) => {
    let data;
    if (
      type === 'flavor_text' &&
      pokemon.hasOwnProperty('flavor_text_entries')
    ) {
      if (isEn) {
        data = pokemon.flavor_text_entries.find(
          (item) => item.language.name === 'en'
        );
      } else {
        data = pokemon.flavor_text_entries.find(
          (item) => item.language.name === 'es'
        );
      }
      return data.flavor_text;
    }
  };

  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => setIsEn(true)}
                type="button"
                className={`btn btn-secondary ${isEn ? 'active' : ''}`}
              >
                EN
              </button>
              <button
                onClick={() => setIsEn(false)}
                type="button"
                className={`btn btn-secondary ${!isEn ? 'active' : ''}`}
              >
                ES
              </button>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card">
              <img
                src={`${POKE_API_SPRITE}${pokemon.id}.png`}
                className="modal-img card-img-top"
                alt="..."
              />
            </div>
            <h5 className="modal-name text-center mt-2">{modalCard.name}</h5>
            <p className="text-center">{parse('flavor_text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

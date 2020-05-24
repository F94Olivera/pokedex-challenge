import React, { useState, useEffect } from 'react';
import './Modal.css';
import axios from 'axios';
const POKE_API = 'https://pokeapi.co/api/v2/pokemon-species/';

function Modal({ modalCard }) {
  // const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(modalCard);
  const [isEn, setIsEn] = useState(true);
  // console.log('MODAL COMPONENT modalCard ', modalCard);

  useEffect(() => {
    const fetchCard = async () => {
      // setLoading(true);
      const res = await axios.get(
        `${POKE_API}${modalCard.name ? modalCard.name : 1}`
      );

      setPokemon(res.data);
      // setLoading(false);
    };

    fetchCard();
  }, []);

  const parse = (type) => {
    console.log('pokemon ', pokemon);

    if (
      type === 'flavor_text' &&
      pokemon.hasOwnProperty('flavor_text_entries')
    ) {
      let data;
      // if(isEn)
      data = pokemon.flavor_text_entries.find(
        (item) => item.language.name === 'en'
      );
      console.log('data ', data);
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
              <img src="4.png" className="modal-img card-img-top" alt="..." />
            </div>
            <h5 className="text-center mt-2">{modalCard.name}</h5>
            <p className="text-center">
              Bulbasaur can be seen napping in bright sunlight.\nThere is a seed
              on its back. By soaking up the sun’s rays,\nthe seed grows
              progressively larger.
            </p>
            <p className="text-center">{parse('flavor_text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

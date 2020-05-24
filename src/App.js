import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';

import axios from 'axios';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const [modalCard, setModalCard] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(POKE_API);
      setCards(res.data.results);
      setModalCard(res.data.results[0]);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const modalDetails = (i) => {
    setModalCard(cards[(currentPage - 1) * cardsPerPage + i]);
  };

  return (
    <div className="App">
      <Navbar />
      <Modal modalCard={modalCard} />
      <Cards
        cards={currentCards}
        loading={loading}
        indexOfFirstCard={indexOfFirstCard}
        modalDetails={modalDetails}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
}

export default App;

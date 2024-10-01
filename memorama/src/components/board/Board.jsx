import React, { useEffect, useState } from "react";
import imgs from "../../data.js";
import Card from "./Card.jsx";
import Modal from "./Modal.jsx";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
function Board() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const createBoard = () => {
    const duplicateCards = imgs.flatMap((img, i) => {
      const duplicate = {
        ...img,
        id: img.id + imgs.length,
      };
      return [img, duplicate];
    });

    const newCards = shuffleArray(duplicateCards);

    const cards = newCards.map((card) => {
      return {
        ...card,
        flipped: false,
        matched: false,
      };
    });
    setCards(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  const handleClick = (id) => {
    if (isDisabled) {
      return;
    }
    const [currentCard] = cards.filter((card) => card.id === id);

    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true;

      const newFlippedCards = [...flippedCards, currentCard];

      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setIsDisabled(true);

        const [firstCard, secondCard] = newFlippedCards;
        if (firstCard.url === secondCard.url) {
          console.log("primer card: ", firstCard.url);
          console.log("segunda card: ", secondCard.url);
          firstCard.matched = true;
          secondCard.matched = true;
          console.log("match");
          setIsDisabled(false);
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            setCards(cards);
            setIsDisabled(false);
          }, 1000);
        }

        setFlippedCards([]);
        setMoves(moves + 1);
      }
      setCards(cards);
    }
    if (cards.every((card) => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
      setModalVisible(true);
    }
  };

  const handleNewGame = () => {
    createBoard();
    setMoves(0);
    setIsDisabled(false);
    setModalVisible(false)
  };

  return (
    <div className="relative h-screen flex items-center flex-col mt-9">
      <div>
        <span className="text-4xl font-bold text-white"> MOVES: {moves}</span>
      </div>
      <div className="grid grid-cols-4 gap-3 justify-center items-center px-3 py-5 my-3">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
      <div>
        <button
          className="text-xl text-white font-semibold bg-slate-700 py-3 px-2 rounded-lg hover:bg-slate-600 transition-all duration-300"
          onClick={() => handleNewGame()}
        >
          NEW GAME
        </button>
      </div>
      {modalVisible && <Modal moves={moves} handleClick={handleNewGame} />}
    </div>
  );
}

export default Board;
